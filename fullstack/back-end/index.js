const express = require("express");

const app = express();
const check =require("./routes/check")
const check1=require('./routes/check1')
const upload = require('./routes/upload')
app.use("/check", check);
app.use('/api/sim',check1);
app.use('/upload',upload);

app.listen("5000", () => {
    console.log("Server is running!");
  });