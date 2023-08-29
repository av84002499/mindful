
# Getting started

To get the Node server running locally:

- Clone [crudapi](https://github.com/av84002499/crudapi.git) repo.
- `npm i` to install all required dependencies
- Install MongoDB Community Edition ([instructions](https://docs.mongodb.com/manual/installation/#tutorials)) and run it by executing `mongod`
- `npm start` to start the local server

# Code Overview

## Dependencies

- [expressjs](https://github.com/expressjs/express) - The server for handling and routing HTTP requests
- [mongoose](https://github.com/Automattic/mongoose) - For modeling and mapping MongoDB data to javascript 
- [mongoose-unique-validator](https://github.com/blakehaswell/mongoose-unique-validator) - For handling unique validation errors in Mongoose. Mongoose only handles validation at the document level, so a unique index across a collection will throw an exception at the driver level. The `mongoose-unique-validator` plugin helps us by formatting the error like a normal mongoose `ValidationError`.
- [body-parser]() - Node.js body parsing middleware. Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
- [babel-preset-stage-0]() - Babel is a JavaScript transpiler that converts edge JavaScript into plain old ES5 JavaScript that can run in any browser (even the old ones). 

## Application Structure

- `index.js` - The entry point to our application. This file defines our express server and connects it to MongoDB using mongoose. It also requires the routes and models we'll be using in the application.
- `ciontroller.js/` - It containse all method to perform the required process.
- `routes,js` - This file contains the route definitions for our API.
- `itemModels/` - This folder contains the schema definitions for our Mongoose models.

