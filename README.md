

## Welcome to my attempt at the Shopping Bag challenge

  

This is how you can run this project:

## First Steps

`git clone https://github.com/IgnorePT/ShoppingBagChallenge.git`<br>
`npm install`

## To run the server

In order to run the webserver you should use:

### `npm run server`

This will run the Webserver on [http://localhost:4000/](http://localhost:4000/) || [http://127.0.0.1:4000/](http://127.0.0.1:4000/)

### `npm run dev-server`

This will run the Webserver using nodemon in order to restart on any code change.
Will run on: http://localhost:4000 || http://127.0.0.1:4000/

## To run the application

### `npm start`

Will run the app in the development mode.<br>

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make any code change.  

### `npm run build`

Builds the app for production to the `build` folder.<br>

It correctly bundles React in production mode and optimizes the build for the best performance.  

The build is minified and the filenames include the hashes.<br>

## Some Notes

Unfortunatly i can only start the development of the project on Sunday so there are a few shortcomings on the project.
#### Server side
Usually i use a module system to create my Webservices so my apps usually have a specific module for each type of endpoint with specifics **routes** | **views** | **controllers** | **middlewares** for each module.
There is always a **Helpers** Folder where i put all my helpers and utils functions, and create bridges between modules. *No module is imported into another.
I have to create the unit Tests for my app
#### Front End (React App)
This is my first more complex react app. I start learning React last week, but on Sunday was the day where i understand the basics concepts of React, the lifecycle, and the concept of states.
Along the development i understand a few little thing to improve my react apps and i will be doing it for sure, thing like Components Re-utilization, and states on child components.
I believe that the way i should create my components now should be something like  `<Button config={configBtn} >` and pass all configuration elements trough here. Like ClassName on Action events, etc this now makes much more sense to me and i think will create really reusable components.
Yesterday i tried to learn Redux to implement before this version but i think i should spend more time to try to understand the concepts of reducers, emmiters, etc. I will work on a different branch on this migration.

##### <br>
Thank you, for the opportunity, i don't want to make excuses, the project is what you can see right here, this is what i know right now, i hope i can keep improving and learning new technologies, i love to make this project and learn a lot of new concepts that is a big win for me already.
Any feedback that you can provide to improve i will gladly appreciated it. 