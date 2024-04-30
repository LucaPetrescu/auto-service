const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes/routes");

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/AutoService")
  .then(console.log("Connected to database"))
  .catch((error) => handleError(error));

app.use("/", routes);

app.listen(5000, () => {
  console.log(`Server started listening on 5000`);
});
