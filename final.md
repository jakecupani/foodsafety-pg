# Food Safety In Prince George's County
## **Team Members:** Jake Cupani, Will Kraft, Aparna Ranganathan, Gyan Kadariya, Nadine Shaker, Matt Ye
## Our Website: [PG County Food Safety](https://foodsafetypg.herokuapp.com/ "PG County Food Safety")

### Information Problem
Prince George’s (PG) County has the 3rd highest number of households in Maryland and yet it is 12th in Median Household Income. There are a lot of individuals that lack the information and tools to make informed health decisions. Currently, there is no easy and accessible way to check if restaurants and food establishments are compliant with health and safety inspections. Furthermore, there is no service that also allows users to find directions to aforementioned restaurants and food establishments. 

### Stakeholders & Target browsers
1. Stakeholders for our project are mainly residents of PG County. 
> They have an interest in eating and shopping at compliant establishments in order to stay healthy. 
2. A secondary stakeholder is the Prince George’s Healthcare Action Coalition.
3. Finally, a future potential stakeholder is the World Health Organization (WHO).

### Data
We chose to work with data provided by the PG Open Data Project.

### Chosen strategies
We wanted to present the data in the most simple and straightforward manner. In order to do so, we had to pull the complicated data supplied by the API, and format it in a way that was easy to understand. We also wanted to supply location data in the same simplified manner. 

### Technical system decisions & rationale
Some technical systems we implemented included the use of Node.js and the Express framework for our back-end server architecture.. We used Bootstrap and Leaflet to format our front-end. Bootstrap supplies simple, consistent, and flexible components that we can alter to fit our needs and theme. We also used Leaflet to format the interact map for its ease of use and customizability. We also used the Google Maps API to supply directions for our users. We chose this API since most users will be familiar with Google Maps. We deployed our app using Heroku, which made it really easy to update and deploy changes. 

### Addressing the problem
Our app addresses the problem by taking health inspection safety results and compiling them in an easy to use interface. Our app allows users to find restaurants and eateries by category, and see if they fail or pass health and safety inspections. Our app will also allow the user to view specific inspection results, the location of the establishment, and directions to the establishment. The app is user friendly and fast, allowing it to reach as wide of an audience as possible.

### Challenges
Some challenges we faced included implementing a search feature. As such, our app only allows filtering by category; a user cannot search for a specific restaurant. Another challenge included moving our javascript that filters the data into the back-end. This could allow for some security and speed issues. 

### Future work
Future work would entail implementing search functionality, moving all data processing on the back-end, and possibly scaling up the project to work state or nationwide. 


