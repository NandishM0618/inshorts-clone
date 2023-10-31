const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const { mongoose } = require("mongoose");

const route = require("./routes/route");
const upload = require("./upload");
const app = express();
dotenv.config();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));
app.use("/", route);

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("connected to mongodb"))
  .catch((err) => console.log(err));

app.listen(5000, () =>
  console.log("Server is running successfully on port 5000")
);

upload();
