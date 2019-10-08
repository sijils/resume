**Installation**

npm install @sijils/resume

**Usage**

This CLI app accepts a json file containing the resume details and uses this data to interact with the resume as a node utility.
Provide the full path (or relative path if the current folder contains the json file) as argument to -r flag. A sample command is given below:

resume -r /usr/resume.json

A sample json is shown below

    {
    "Education":[
        "Post Graduation 100%",
        "Graduation 100%"
    ],
    "Past Experience":[
        "5 years at my company",
        "1 year at your company"
    ],
    "Tech Stack":[
        "Javascript",
        "Java",
        "Mainframe"
    ],
    "Projects":[
        "AA",
        "DA",
        "VCS",
        "AIM"
    ],
    "Contact":[
        "youknow@wheretofind.me"
    ]
    }

Run the command : resume -r *resume_json_file*
    
![one](/images/resumeNode.png)

Iterate through each of the json array keys using the utility with ENTER key

![two](/images/resumeNode2.png)
