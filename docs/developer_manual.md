## Developer manual for Food Safety PG
### Introduction 
This developer manual was created to help you guide through the system design of Food Safety PG Application. This manual
will go through how to get all the files you will need to run the application and steps on how to run and install any dependencies that were
used to create this application. This manual will cover how to run the server, more information about the API that was used and all the endpoints.
With the help of this guide, you will be able to run this application in your local machine and continue your journey as a web developer. 

### How to install application dependenices
Prerequisite: Before you can run the application there are few things you need to have in your machine. 
1.	Make sure you have downloaded node.js in your machine with the appropriate version by using this link to [node.js](https://nodejs.org/en/download/). Node.js is used to run the server for this application. This application’s
back-end heavily relies on node.js as the server is built using node.js.
2.	Once you have the node.js app installed on your machine, you can use Powershell (if you are in windows machine) 
to run node.js simply by opening Powershell and enter ```npm install node.js```and this will install all node.js package 
into your machine to be used while developing this application. 

The sample-server that is used was created by professor Alex 
```javascript
{
"name":"sample-server",
"version":"1.0.0",
"description":A sample webserver to pull PG data and push it to a local page",
"main":"server.js",
"engines":{
  "node":"12.13.0"
},
"scripts":{
  "test": "echo \"error: no test specified\" && exit 1",
  "start": "node server.js"
},
"author": "Alex Leitch",
"license": "CC-BY-SA-4.0",
"Dependencies": {
  "body-parser":"^1.19.0",
  "bootstrap-icons":"^1.0.0-alpha",
  "express":"^4.17.1",
  "leaflet":"1.5.1",
  "node-fetch": "^2.6.0"
},
"devDependencies":{
  "eslint":"^6.5.1",
  "eslint-config-airbnb-base":"^14.0.0",
  "eslint-plugin-html":"^6.0.0",
  "eslint-plugin-import":"^2.18.2"
  }
}
```
Leaflet is used to provide our application with mapping capabilities which includes using the data from the Prince George’s API
to plot markers on the map for users to show the location of each restaurant. To install leaflet on your machine open Powershell 
for windows and terminal for mac and enter ```npm install leaflet``` and this will download all the leaflet packages that you will need to 
implement the mapping capabilities for this application. 

```C:\Users\User Name> npm install leaflet```

To install bootstrap open your PowerShell or terminal and enter ```npm install bootstrap``` and this will install all bootstrap packages in your 
machine to be used later.

```C:\Users\User Name> npm install bootstrap```

### How to run the application in the server
How to get application files
1.	All the application files are uploaded to [GitHub](https://github.com/jakecupani/foodsafety_pg) on the master branch. 
2.	Clone or download the repository to your GitHub desktop to review the files and codes.
3.	Once you have downloaded the files, on your GitHub desktop click on ```repositor``` which is located at the top where the navigation bars are located, then click on 
```show on explorer``` this will take you to your machines file directory where the files are located.  
4.	You will be able to see the file path which will help you run the server later.

Once you have completed all the steps above you are ready to run the application from the server. 
1.	If you are using a Windows machine make sure you have PowerShell installed in your machine as we will be using PowerShell to run the server. If you have a Mac you can use 
terminal in your machine to run the server. 
2.	Open PowerShell or terminal in your machine and make sure you have added the file path to where the application files are located. For example: ```C:\Users\Your Name\documents\project\foodsafety_pg```
3.	Once you have entered the correct file path enter ```npm start``` to start the server. The server will be running on port 3000
```
> sample_server@1.0.0 C:\Users\User Name\documents\application\foodsafety_pg
> node server.js

Our app is running on port 3000
```
4.	You can go to the web browser and on the address bar enter “http://localhost:3000/” which will open the application on your web browser. 

### How to run a test for the application 
To test our application, we will be using Google Chrome's built-in auditing tool. This tool allows us to gauge how well our site is doing in terms of accessibility, performance, best practices, 
and SEO. Based on our results, we can determine which parts of our application need more work than others. Below we have provided the current output from the auditing tool, which shows our application is doing well 
in almost all categories.
![Auditing Results](/src/static/AuditingResults.png)










