const express = require("express");
const path = require("path");
const app = express();
const port = 80;
// EXPRESS SPACIFIC STUFF
app.use("/static" , express.static("static")); // For serving static files
app.use(express.urlencoded());

//PUG SPACIFIC STUFF
app.set("view engine" , "pug"); // set the template engine as pug
app.set("views" , path.join(__dirname , "views")); // set the views directory

// ENDPOINTS
app.get("/" , (req , res)=>{
    const Gautam = {}
    res.status(200).render("home.pug" , Gautam);
});
app.get("/contact" , (req , res)=>{
    const Gautam = {}
    res.status(200).render("contact.pug" , Gautam);
});

// START THE SERVER
app.listen(port , ()=>{
    console.log(`The application started successfully on port ${port}`);
});