#!/usr/bin/env node
"use strict";
const yargs = require('yargs');
var path = require('path'); 
var inquirer = require("inquirer");
var chalk = require("chalk");

var response=chalk.bold.green;



const argv = yargs
                .option('resume', {
                    alias: 'r',
                    description: 'Path to resume file',
                    type: 'string',
                })
                .nargs('r', 1)
                .demandOption(['r'])
                .help()
                    .alias('help', 'h')
                .argv;


function main(){
    
    resumeHandler();
}

function resumeHandler(){
    inquirer.prompt(resumePrompts).then(answer=>{
 //       console.log("inter"+Object.getOwnPropertyNames(answer))
        if(answer.resumeOptions == "Exit"){
            return;
        }

        var option=answer.resumeOptions;

        console.log(response("----------------------------"));
        resume[`${option}`].forEach(info=>{
            console.log("|      => "+info);
        });
        console.log(response("----------------------------"));
        inquirer
                .prompt({
                    type:"list",
                    name:"exitBack",
                    message:"Go back or exit?",
                    choices:["Back","Exit"]
                })
                .then(choice=>{
                    if (choice.exitBack=="Back"){
                        resumeHandler();
                    }else{
                        return;
                    }
                })
    })
}
if(argv.resume!==''){
    
    var fullPath=path.resolve(argv.resume)
    
    var resume=require(fullPath);

    var resumePrompts={
        type:"list",
        name:"resumeOptions",
        message:"What do you want to know about me?",
        choices:[...Object.keys(resume),"Exit"]
    };

    
    main();
}
