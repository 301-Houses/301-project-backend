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

/************************************************************************************* */

/********************* Setup Routes Here ******************************/

//app.get ....

/********************************************************************/

ServerInit();
