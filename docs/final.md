# Food Safety PG
![Food Safety PG Logo](https://github.com/jakecupani/foodsafety_pg/blob/master/src/static/pg-logo.png)

### Group Members: Jake Cupani, Matt Ye, Nadine Shaker, Aparna Ranganathan, Gyan Kadariya, William Kraft
### Our Website: [PG County Food Safety](http://foodsafetypg.herokuapp.com/index.html "PG County Food Safety")

### Information Problem
Prince George’s (PG) County has the 3rd highest number of households in Maryland and yet it is 12th in Median Household Income. There are a lot of individuals that lack the information and tools to make informed health decisions. Currently, there is no easy and accessible way to check if restaurants and food establishments are compliant with health and safety inspections. Furthermore, our integration with Google Maps allows for users to get directions, reviews, and much more information once they decide on a food establishment.

### Stakeholders
+ Stakeholders for our project are mainly residents of PG County. 
    - They have an interest in eating and shopping at compliant establishments in order to stay healthy.
+ A secondary stakeholder is the Prince George’s Healthcare Action Coalition.
+ Finally, a future potential stakeholder is the World Health Organization (WHO).

### Target Browsers
Our application was created with all browsers in mind.

All modern browsers will be able to host our web-based application, including Chrome, Firefox, & Safari.

With the growing use of hand-held mobile devices, we created our application with this in mind, paying special attention to the resolution and interactivity of its display. With that being said, our application seemlessly views on either desktop computers or hand-held devices, in order to make the application easy to use wherever it is being viewed.

In addition, the OS your device is running does not interfere with the ability for the app to preform well because the application has been created with all operating systems in mind.

### Data
We chose to work with data provided by the PG Open Data Project, specifically the [Food Inspection API](https://data.princegeorgescountymd.gov/Health/Food-Inspection/umjn-t2iz "PG County Food Inspection Dataset"). The data has various attributes detailing information regarding each establishment, such as location, category, name, and detailed inspection results. The location variable made it easy to port into the Leaflet map on our website since they are already "Point" objects with respective latitude and longitude coordinates. The data was provided by the Department of Permitting, Inspections and Enforcement. The dataset was created on Match 6th, 2019, which makes it a fairly new dataset to be working with. When we made the API request for the data, it returns in JSON which is helpful because it is an easy to manipulate format.

### Chosen Strategies
We wanted to present the data in the most simple and straightforward manner. In order to do so, we had to pull thedata supplied by the API, and load it into our leaflet map. Through the help of Bootstrap, we were able to effectively create UI elements that are aesthetically pleasing, easy to use, and accessible. We also wanted to supply location data in the same simplified manner which is information on establishments is only displayed for the selected establishment, decreasing the cognitive load of the user. In order to increase accessibility, we also had to make sure that our website was responsive and had appropriate alt tags for images. The responsiveness of our website is largely thanks to the ease of use of Bootstrap, though we did have to write a couple of media querys for the about page. Ultimately, we believe that the overall experience of using our application is easy and intuitive.

### Technical system decisions & rationale
Some technical systems we implemented included the use of Node.js and the Express framework for our back-end server architecture. We used Bootstrap and Leaflet to format our front-end. Bootstrap supplies simple, consistent, and flexible components that we can alter to fit our needs and theme. We also used Leaflet to format the interact map for its ease of use and customizability. We also used the Google Maps API to supply directions for our users. We chose this API since most users will be familiar with Google Maps. We deployed our app using Heroku, which made it really easy to update and deploy changes. Another thing to note about Heroku is that it allowed us to directly connect the Github account of the repository, which automatically builds our application when we push commits to the master branch. This is why we don't need a "build" folder in our directory.

### Addressing the problem
Our application addresses the problem by taking health inspection safety results and compiling them in an easy to use interface. Our app allows users to find restaurants and eateries by category, and see if they fail or pass health and safety inspections. It is based on this information that the user can decide where they want to eat. Our mission with this application is to *inform* our users of the results and allow them to make their own, hopefully healthy, decisions. The specific inspection results show the location of the establishment, and directions to the establishment. All in all, the app is user friendly and fast, allowing it to reach as wide of an audience as possible.

### Challenges
Some challenges we faced included implementing a search feature. As such, our app only allows filtering by category; a user cannot search for a specific restaurant. Another challenge included moving our javascript that filters the data into the back-end. This could allow for some security and speed issues. We also had challenges deciding what data to load when the website is first loaded. We ended up deciding to not load any data at first and allow the user to load the data they want. This ultimately optimizes the performance of the website and prevents all of the data from being loaded at once and slowing down the site.

### Future work
There are a lot of areas we could focus on if we were to work on this project in the future. One example of a feature we would implement in the future is searching for establishments on the leaflet map. We also want to move all of the data processing to the back-end for more optimal processing design. An additional feature we thought of was having custom markers so that they are different colors depending on the severity of the inspection results. This would allow users to easily find locations that are compliant or research non-compliant establishments. Hopefully in the future we can achieve these goals and help make our application even better than it is today!
