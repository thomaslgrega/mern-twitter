const mongoose = require("mongoose");

const express = require("express");
const app = express();
const db = require('./config/keys').mongoURI;
mongoose
  .connect(db, { userNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("Hello again World"));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server is running on port ${port}`));