require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors =require("cors");

// IMPORT YOUR SCHEMAS HERE
require("./models/Profiles"); //This is just an example. Don't forget to delete this

const app = express();
app.use(cors());

// This is where your API is making its initial connection to the database
mongoose.Promise = global.Promise;
mongoose.set("strictQuery", false);
mongoose.connect(process.env.DATABASE_CONNECTION_STRING, {
  useNewUrlParser: true,
});

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false}));
// IMPORT YOUR API ROUTES HERE
// Below is just an example. Don't forget to delete it. 
// It's importing and using everything from the profilesRoutes.js file and also passing app as a parameter for profileRoutes to use

console.log(process.env.DATABASE_CONNECTION_STRING);
mongoose.connect(process.env.DATABASE_CONNECTION_STRING)
.then((client) => {
  const db = client.db(process.env.MONGO_DB_NAME)

require("./routes/profilesRoutes")(app, db); 

const PORT = process.env.PORT;
app.get('/api/profiles', async (req, res) => {
  const terms = await profiles().find({}).toArray();
  return res.status(200).send(terms);
});
app.get('/api/profiles/:id' , async (req, res) => {
  const ItemId = req.params.id;
  const item = await profiles.find({_id: new ProductId(ItemId)});
  if (!item) {
    return res.status(404).send("Item not found");
  }
  return res.status(200).send(term);
})
app.listen(process.env.PORT, () => {
  console.log(`API running on port ${process.env.PORT}`);
});
})
.catch((err) => {
  console.error("Error: ", err);
});