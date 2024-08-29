
const express = require("express");
const app = express ();
app.get("/",(req,res)=>{
    res.status(200).send("INDIAN INNOVETION HUB");
})

app.get("/about",(req,res)=>{
res.status(200).send("NTURALFARM");
})

const port = 8000;
app.listen(port, () => {
    console.log(`Site is running on port http://127.0.0.1:${port}`);
});