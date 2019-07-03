const express = require("express");
const app = express();

app.get("/",(req,res)=>{
    res.send("server is listening at '/'get requrest");
})
app.listen(5500,()=>{
    console.log("program is listening at 5500");
})

console.log("server is ready for use................")