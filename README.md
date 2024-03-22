# Crave
 
## Video Demo: 
https://youtu.be/zySRs-41KIs
 
## Description:
Crave is a web application that helps you satisfy your cravings easily by helping you find the nearest place to get your fix.
 
Crave uses React, Typescript, Express, and Yelp’s API to deliver you quick solutions to your cravings.
 
### How to Use:
Launch the crave app.
Allow it to use your location (essential to find the place closest to you)
Type your craving in the search bar.
Crave will display the closest option it has found, showing you the name, address, distance, and a link to their Yelp page.
If you don’t like that option, you can scroll through the next 4 closest options.
 
 
Crave has two different directories, one for the main code of the Crave app, and a server-side proxy using Express.
 
### Crave:
The two components I created were a Form and Result. 

The Form tracks state for food type, latitude, longitude, list of restaurants, and the Chart. It also displays a form for the user to input their food type and submit the request.  I have a useEffect for when the page loads to request the user’s location and retrieve their latitude and longitude. When the user types in their desired food type, the type variable is updated and set to their value typed. When the user submits their request, I have a handleSubmit function that prevents the default behavior and calls my fetchRestaurants function. The fetchRestaurant calls the Express Server to call the Yelp API and passes the type, latitude, and longitude values to populate the response. I convert the response into json and store that response in my list variable. This list gets passed to my Result component as props so that it can be used to populate the information in the result section. 

The Result component takes the list of restaurants fetched from Yelp and displays them for the viewer to see. I created an object Restaurant to define what data I wanted from the list of restaurants, which was the name, location, distance, and Yelp url. The actual list prop that got passed from the Form was a list of Restaurants so I also defined an object ResultProps which is a list of Restaurants, which is what the Result expects the props to be. The Result component maps each item in the list and displays the restaurant data. 

### Server:
This server was created due to CORS issues with the Yelp API while testing locally. This error was happening because my requests were originating from a different place than the Yelp API, and thus the API was blocking my requests. I needed some help from Github Co-Pilot on establishing this Express server as it was not something I was familiar with.

### Decisions I made:
One of the first decisions I had to make was which language(s) I wanted to use. I first considered trying to use Java since my team at work uses it heavily, but it seemed like too much to have to learn. I would have to get myself more up to speed with Java, and also if I wanted to connect it to a front end, I’d also have to learn a framework for Java. Instead, having past familiarity with React made it an easy choice to use for a quick frontend. However, I still wanted to learn something new and relevant to my team, so I decided to use it with Typescript instead of Javascript. 

Another significant decision to use was which API I wanted to use to get my results for the restaurant query. The main two feasible ones were Yelp and Zomato. I had used Yelp in a previous project, so I knew it was pretty easy to use and I like that it has a certain number of free calls, so it’s not something I would have to pay for. 

One of the more technical decisions I made was where to put the retrieval of location. The two main options I explored were on load and on submit. Doing it on submit wouldn’t do it fast enough, and my results would populate incorrectly. However doing it on load would sometimes make it so that if enough time hasn’t passed since loading the page, it would also show up incorrectly. I ended up picking on load, and I also decided to disable the submit button until the useEffect has completed its load so incorrect data won’t be populated. 


