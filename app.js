require("dotenv").config();
const express = require("express");
const PORT = process.env.PORT || 1337;

const app = express();
const router = require("./app/router/router");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}`);
});

