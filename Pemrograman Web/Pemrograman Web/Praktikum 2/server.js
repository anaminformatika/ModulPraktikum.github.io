const express = require("express");
const cors = require("cors");
const configDatabase = require("./dbConfig/database.js");

const dotenv = require("dotenv");

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

//connecting to the mongodb database
configDatabase();

app.use(cors({ origin: true, credentials: true }));

// add the middlewares
app.use(express.json({ extended: false }));
app.get("/", (req, res) =>
  res.send("Hello there!! Cheers !! The server is up and running")
);
