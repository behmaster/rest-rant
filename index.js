// Modules and Globals
require("dotenv").config();
const express = require("express");
const methodOverride = require("method-override");
// const mongoose = require("mongoose");

const app = express();

//Express Settings
app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use("/places", require("./controllers/places"));

// //MONGOOSE
// mongoose.connect(
//   process.env.MONGO_URI,
//   { useNewUrlParser: true, useUnifiedTopology: true },
//   () => {
//     console.log("connected to mongo: ", process.env.MONGO_URI);
//   }
// );

app.get("/", (req, res) => {
  res.render("home");
});

app.get("*", (req, res) => {
  res.render("error404");
});

app.listen(process.env.PORT);
