# 1st Step
create package.json file using command
    npm init

# 2nd Step
Add Dependencies
    1. npm install --save-dev nodemon (It helps to restart server automatically)
    2. npm install --save express (It helps to create an api in convinient way)
    3. npm install --save body-parser (It helps to parse the incoming request)

# 3rd Step
Add file app.js or index.js in your project folder(these are standard name you can choose by your own and make sure to pass in packag.json)
add inside scripts
"scripts": {
    "start": "nodemon app.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  }
  Something like this. So when you will run npm start command your app js will be up and running

# 4th Step
Add all required headers in app.js or index.js whatever file you have made using require
    1. const express = require('express');
    2. const app = express();
    
After adding these also you can add on what port you want to listen your server
    app.listen(8080)

# 5th Step
You can add routes in same app.js file but its always a good practice to keep your routes separately
so i will create route folder in my project folder
Inside that you can create your route file with any name suits to your requirement and then you can add some imports in it

Here i created feed.js and added route to it something like this

## const express = require('express');
## const router = express.router();

## router.get('/posts');

## module.exports = router;

## 6th Step
Now you need to create a controller where you can add logic for the route you made in routein my case i made my route in feed.js
So i will create one controller folder inside my project folder and give relevant name to my controller in my case i will gave same name which i gave to route so it will be feed.js

## 7th step
Now when you created the controller i created on get method 
And then you need to add this method in your route so it should look like something like this

## const express = require('express');
## const router = express.router();

## const feedController = require('../controllers/feed');

## router.get('/posts', feedController.getPosts);

## module.exports = router;

## 8th Step
So now able to reach that route you need to register this in app.js or index.js or any name you have made the startup file
