const express = require('express');
const app = express();
const port = 3001;

app.get("/", (req, res) => {
    res.send("hi");
});

app.listen(port, function(err){
    if (err) console.log("something went wrong", + err);
    console.log(`server is on port ${port}`);
});