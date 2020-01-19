// server.js

const express = require("express");
const server = express();

const body_parser = require("body-parser");

// parse JSON (application/json content-type)
server.use(body_parser.json());

const port = 4000;

// << db setup >>
const db = require("./db");
const dbName = "account";
const collectionName = "myAccount";

// << db init >>

server.listen(port, () => {
    console.log(`Server listening at ${port}`);
});

// << db init >>
db.initialize(dbName, collectionName, function(dbCollection) { // successCallback
   // // get all items
   // dbCollection.find().toArray(function(err, result) {
   //     if (err) throw err;
   //       console.log(result);
   // });

   // << db CRUD routes >>
   dbCollection.insert({name: "adim1",password: "1234567899"});

   // get all items
   dbCollection.find().toArray(function(err, result) {
      if (err) throw err;
        console.log(result);
   });

}, function(err) { // failureCallback
   throw (err);
});
