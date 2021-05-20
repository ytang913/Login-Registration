# Login-Registration Application 

# About

This project is a Login Registration Application built using React.JS, Express, MongoDB,Bootstrap CSS, and axios.

Users are tasked to enter in four fields: Full Name, Username, Email, and Password

# Documentation

# Backend

Express and MongoDB was used for this portion.

server.js is created for the backend server and also connected to Mongoose

When a user enters in their information a POST request is sent to the backend
and router.post will handle it. The Post request will also create a new schema
                        
LoginModels.js is created for the schema and Mongoose is housed here and within it there are five fields Full Name, Username, Email, password, and Date.

The Four fields: Full Name, Username, Email, and password is what the user will enter in, while the Date field will allow me to know which month,day, and year they entered in their information.  
                        
MongoDB Cloud Atlas is used to house the data received from Post requests and it allows me to see the requests. A cluster was created within MongoDB Cloud Atlas and it is powered by AWS.
                        
# Frontend

React.JS was used for this portion.

A super class and constructor is created for the different states for the Login Registration Application. The states are Full Name, Username, Email, and password
                        
When the user puts their information in the empty form and clicks on submit, the onSubmit event will be triggered and it will gather the values that the user entered.
                            
The information is stored in the states and then it will be saved in the arraylist registered.

Then the information from registered will be sent to the backend server which is done using axios. Axios essentially connects the frontend and backend so that the information from the frontend can be passsed to the backend. 

# Result when the user initially runs both frontend and backend
![](images/)
# Result when the user enters their information
![](images/)
# Result of when MongoDB Cloud Atlas recieves the Post request
![](images/)                        