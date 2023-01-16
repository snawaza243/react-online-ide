console.log("Hello JavaScript")

// import {
//     Express
// } from 'express';
const express = require(express);

const app = express();

app.get("/", (req, res) => {
    return res.json({hello:"world!"});
});

app.post("/run")

app.listen(5000, ()=>{
    console.log(`Listening on port 500`);
})
