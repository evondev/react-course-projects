require("dotenv").config();
const jsonServer = require("json-server");
const express = require("express");
const PORT = process.env.PORT || 3009;
const app = express();
app.use(express.json());
app.use("/api", jsonServer.defaults(), jsonServer.router("db.json"));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
