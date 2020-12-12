# Dashboard for "Fampay_assignment"

This app provides a simple card based UI for the api response of the project 'Fampay_assignment'. It displays the first 100 enteries ( sorted by descending order of published datetime ) stored in the database. It also allows the user to navigate to the url of the selected video. To run the project on your local machine , please follow the given steps.

1) Ensure that Fampay_assignment is running on the port:8000 on your machine as the project populates it's feed based on the api response of 
   the endpoint http://127.0.0.1:8000/api/. The steps to run the Fampay_assignment are provided in it's readme file.
2) Install node. On MacOS , this can be done using ``` brew install npm```
3) Clone the repository , and cd into the project folder.
4) Run ```npm install --save reactstrap react react-dom``` to install reactstrap. Version 7.x of npm might cause a dependacy tree. To fix this , use the 
   option ```--legacy-peer-deps```
5) Use the command ```npm start``` to start the app.  
