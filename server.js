"use strict";

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const PORT = process.env.PORT || 3001;

function ServerInit() {
  app.listen(PORT, () =>
    console.log(`listening on ${PORT} \n http://localhost:${PORT}`)
  );
  app.get("/", (req, res) => {
    res.send("<h1>Weclome To Home Route</h1>");
  });

  app.get("*", (req, res) => {
    res.send("<h1>Error 404, Page Not Found");
  });
}


/********************* Require Handlers From Controllers Folder ********************** */
const seedData = require("./Controllers/HouseCRUD/seedData");
// seedData();
const handelFetch=require('./Controllers/HouseCRUD/Fetch')
const handelCreate = require("./Controllers/HouseCRUD/CreateHouse");
const handelDelet = require("./Controllers/HouseCRUD/DeletHouse");
const handelUserUpdate = require("./Controllers/HouseCRUD/UpdateUserHouse");
const handelFetchUser=require('./Controllers/HouseCRUD/FetchUserData')
const handelUpdateHouse=require('./Controllers/HouseCRUD/UpdateHouse')
// /************************************************************************************* */

/********************* Setup Routes Here ******************************/
app.put('house/:id',handelUpdateHouse)
app.get("/house", handelFetch);
app.post("/house", handelCreate);
app.delete("/house/:id/:email", handelDelet);
app.put("/house/:id/:email", handelUserUpdate);
app.get('/house/:email',handelFetchUser)
/********************************************************************/

ServerInit();
