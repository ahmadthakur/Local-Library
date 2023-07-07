require("dotenv").config();

const express = require("express");
const users = require("./routes/users");

// const cors = require("cors");
const app = express();
// app.use(cors);

const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const mongoDB = `mongodb+srv://ehmedthakur:${process.env.MONGODB_PASSWORD}@cluster0.q2qsb4m.mongodb.net/?retryWrites=true&w=majority`;

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Connected to MongoDB");
}

app.get("/", (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.send("Hello World");
});

app.get("/users", users);

const port = process.env.PORT || 2999;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
