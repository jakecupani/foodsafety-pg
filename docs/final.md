# Food Safety PG
### Group Members: Jake Cupani, Matt Ye, Nadine Shaker, Aparna Ranganathan, Gyan Kadariya, William Kraft
### Our Website: [PG County Food Safety](http://foodsafetypg.herokuapp.com/index.html "PG County Food Safety")

### Information Problem
Prince George’s (PG) County has the 3rd highest number of households in Maryland and yet it is 12th in Median Household Income. There are a lot of individuals that lack the information and tools to make informed health decisions. Currently, there is no easy and accessible way to check if restaurants and food establishments are compliant with health and safety inspections. Furthermore, there is no service that also allows users to find directions to aforementioned restaurants and food establishments. 

### Stakeholders & Target browsers
+ Stakeholders for our project are mainly residents of PG County. 
    - They have an interest in eating and shopping at compliant establishments in order to stay healthy.
+ A secondary stakeholder is the Prince George’s Healthcare Action Coalition.
+ Finally, a future potential stakeholder is the World Health Organization (WHO).

### Data
We chose to work with data provided by the PG Open Data Project, specifically the [Food Inspection API](https://data.princegeorgescountymd.gov/Health/Food-Inspection/umjn-t2iz "PG County Food Inspection Dataset"). The data has various attributes detailing information regarding each establishment, such as location, category, name, and detailed inspection results. The location variable made it easy to port into the Leaflet map on our website since they are already "Point" objects with respective latitude and longitude coordinates. The data was provided by the Department of Permitting, Inspections and Enforcement. The dataset was created on Match 6th, 2019, which makes it a fairly new dataset to be working with. When we made the API request for the data, it returns in JSON which is helpful because it is an easy to manipulate format.

### Chosen Strategies
We wanted to present the data in the most simple and straightforward manner. In order to do so, we had to pull the complicated data supplied by the API, and format it in a way that was easy to understand. We also wanted to supply location data in the same simplified manner.

### Technical system decisions & rationale
Some technical systems we implemented included the use of Node.js and the Express framework for our back-end server architecture. We used Bootstrap and Leaflet to format our front-end. Bootstrap supplies simple, consistent, and flexible components that we can alter to fit our needs and theme. We also used Leaflet to format the interact map for its ease of use and customizability. We also used the Google Maps API to supply directions for our users. We chose this API since most users will be familiar with Google Maps. We deployed our app using Heroku, which made it really easy to update and deploy changes. Another thing to note about Heroku is that it allowed us to directly connect the Github account of the repository, which automatically builds our application when we push commits to the master branch. This is why we don't need a "build" folder in our directory.

### Addressing the problem
Our application addresses the problem by taking health inspection safety results and compiling them in an easy to use interface. Our app allows users to find restaurants and eateries by category, and see if they fail or pass health and safety inspections. It will also allow the user to view specific inspection results, the location of the establishment, and directions to the establishment. The app is user friendly and fast, allowing it to reach as wide of an audience as possible.

### Challenges
Some challenges we faced included implementing a search feature. As such, our app only allows filtering by category; a user cannot search for a specific restaurant. Another challenge included moving our javascript that filters the data into the back-end. This could allow for some security and speed issues. We also had challenges deciding what data to load when the website is first loaded. We ended up deciding to not load any data at first and allow the user to load the data they want. This ultimately optimizes the performance of the website and prevents all of the data from being loaded at once and slowing down the site.

### Future work
There are a lot of areas we could focus on if we were to work on this project in the future. One example of a feature we would implement in the future is searching for establishments on the leaflet map. We also want to move all of the data processing to the back-end for more optimal processing design. An additional feature we thought of was having custom markers so that they are different colors depending on the severity of the inspection results. This would allow users to easily find locations that are compliant or research non-compliant establishments.
