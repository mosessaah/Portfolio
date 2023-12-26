import express from "express";     // Using Express meddleware 
import lodash from "lodash";       // 

const app = express(); // Initialize 
const port = 3000; // Port number for now on my computer 
app.set('view engine', 'ejs');  // 
app.use(express.urlencoded({extended: true}));      // Set our body passer
app.use(express.static("public"));                  // public folder 

app.get("/", (req, res)=>{
    res.render("home");
});

// Server Listening on the port number 
app.listen(port, function() {
    console.log("Server started on port 3000");
  });