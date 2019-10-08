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

![one](/images/resumeNode.png)
![two](/images/resumeNode2.png)
