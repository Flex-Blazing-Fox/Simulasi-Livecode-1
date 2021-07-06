require("dotenv").config();
const express = require("express");
const routers = require("./routers");
const cors = require("cors");
const port = 3000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routers);

app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
