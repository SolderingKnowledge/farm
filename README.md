# Aplication for farmers

### Installing:

1 `npm install`

2 `npm run dev`

3 `npm install @fluentui/react`

4  `sudo npm i -g mongoimport` 

5 `npx <mongoimport strings>`


### Tech used:
1. [ Next JS](https://nextjs.org/docs/getting-started)
   -React server side rendering framework

2. [ Fluint UI React: React framework for ready built-in components](https://developer.microsoft.com/en-us/fluentui#/get-started)

3. [MongoDB Atlas: register](https://cloud.mongodb.com)
   
   -DATA STORAGE/Clusters/connect;  where you connect
   -DATA STORAGE/Clusters/collections;  where you see you created data collections
   -DATA STORAGE/Clusters/collections/Command Line Tools/Data Import and Export Tools/mongoimport;  where you import your json data
   -SECURITY/Network Access/ where you whitelist your IP address to access


4. [Mongoose](https://mongoosejs.com/docs/)
   -For creating Tables  Row and Table Column in SQL but when you use MongoDB you use Schemas and here Mongoose comes into play
   -Codes for Mongoose Schemas are in `utils/connectDb.js`

### Navigation:

`localhost: 3000` => `farm/pages/index.js`

`localhost: 3000/account` => `farm/pages/account.js`

Home page is _app.js


### Notes:

1 If there is no index.js file then Next won't find your file; `package.json` => `farm/pages/index.js`

2 Next version 9 creates routing which is inside api folder. Routes are features of Next JS you don't have to write routes.

3 By running on the same port `http://localhost: 300` we avoid CORS issues;

4 Server and Cient code is are managed by NextJS simply avoiding to write common JS such `const express = require("express");` instead you write like it's `ES6 import export`;

5 