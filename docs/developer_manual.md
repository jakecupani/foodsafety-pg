## A Developer manual for Food Safety PG
![Food Safety PG Logo](https://github.com/jakecupani/foodsafety_pg/blob/master/src/static/pg-logo.png)

### Table of contents
* [Introduction](#intro)
* [How to install application dependencies](#depend)
* [How to Run application in the server](#server)
* [How to run a test for the application](#test)
* [API for the server application](#API)
* [Bugs and Road-Map to future development](#bugs)

**<a name="intro"></a> Introduction**

This developer manual was created to help you guide through the system design of Food Safety PG Application. This manual
will go through how to get all the files you will need to run the application and steps on how to run and install any dependencies that were
used to create this application. This manual will cover how to run the server, more information about the API that was used and all the endpoints.
With the help of this guide, you will be able to run this application in your local machine and continue your journey as a web developer. 


**<a name = "depend"></a>How to install application dependenices**

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
implement the mapping capabilities for this application.</p> 

```C:\Users\User Name> npm install leaflet```

To install bootstrap open your PowerShell or terminal and enter ```npm install bootstrap``` and this will install all bootstrap packages in your 
machine to be used later.

```C:\Users\User Name> npm install bootstrap```

**<a name="server"></a> How to run the application in the server**

How to get application files
1.	All the application files are uploaded to [GitHub](https://github.com/jakecupani/foodsafety_pg) on the master branch. 
2.	Clone or download the repository to your GitHub desktop to review the files and codes.
3.	Once you have downloaded the files, on your GitHub desktop click on ```repositor``` which is located at the top where the navigation bars are located, then click on 
```show on explorer``` this will take you to your machines file directory where the files are located.  
![Github Explorer](https://github.com/jakecupani/foodsafety_pg/blob/master/src/static/githubPG.png)
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

**<a name="test"></a> How to run a test for the application** 

To test our application, we will be using Google Chrome's built-in auditing tool. This tool allows us to gauge how well our site is doing in terms of accessibility, performance, best practices, 
and SEO. Based on our results, we can determine which parts of our application need more work than others. Below we have provided the current output from the auditing tool, which shows our application is doing well 
in almost all categories.
![Auditing Results](/src/static/AuditingResults.png)

**<a name="API"></a> API for the server application**

Prince George’s County API was used to get the data to the server for this application. The three endpoints that are implemented in this application include GET, POST, and PUT endpoints.

The GET endpoint gets the data from the API to the server which is then displayed in the front-end of the application. Before doing this it edits some of the data to be more readable.
```javascript
app.get('/api', (req, res)=>{
  const baseURL = 'https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json';
  fetch(baseURL)
    .then((r) => r.json())
    .then(res => {
      let mapdata = res.map(function (data) { return data});
      mapdata.map(el => {
        if (el.inspection_result === "------"){
          el.inspection_result = "No inspecction results available.";
          }
        });
        return mapdata;
      })
      .then((data) => {
        res.send({ data: data});
        })
        .catch((err) => {
          console.log(err);
          res.redirect('/error');
        });
    });
    let message = [];
    app.get('/message', function (req, res) {
      res.json(messages);
    });
```
The POST endpoint is implemented to take information from users which they input in the Contact page and store it in the server for future use but as of right now all it does is display the contact page. 
```javascript
app.post('/messages', function (req, res){
  messages.push(request.body)
  var user_name = req.body.user;
  console.log("User name = " + user_name + ", message is " + message);
  res.end("yes");
});
```
The PUT endpoint is implemented to allow users to edit their messages they sent in the Contact page, but currently there is no real way to do this on the website. It finds the message matching the given username and sets it to the new message.
```javascript
app.put('/messages/:user', function (req, res) {
  let user = Number (req.body.user);
  let msg = request.body.message;
  let temp = messages.find((el) => el.user === user);
  let index = messages.indexOf(temp);
  
  if (!temp){
    response.status(500).send('Your messgae was not found.');
  } else {
    message[index].message = msg;
    response.send('message updated.')
  }
});
```

**<a name="bugs"></a> Bugs and Road-Map to future development**

Some of the bugs you might encounter with this application include loading of the map markers and filters. In the beginning the team had issues with filter. When the user clicked  the filters the map was not populating with markers as expected but it was resolved later. The post request takes you to the contact page where users can input their contact info but the information is not sent anywhere and for future development that can be worked further to get feedback from users to improve the application. For future development we would like to take this application into a bigger scale, not just PG county but hopefully make it to state-level so everyone in Maryland can use this application to make healthy choices when it comes to picking where to eat. We will make changes into the application if we do decide to up the scale of this project by adding different features to the site like adding a search bar so people can easily look up restaurant. We will need more data since we will be covering more areas and solutions to handle massive amounts of data on the server and display it to the front of the application without any delay or lag for smooth user experience. 

