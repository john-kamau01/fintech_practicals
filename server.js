const express = require("express");
const app = express();
const PORT = 8080;

const dbURL = `mongodb+srv://admin:B9RB4x3rEDzhjLbs@fintechcluster1.yq563m6.mongodb.net/FINTECH_PRACTICALS?retryWrites=true&w=majority&appName=fintechCluster1`

// ROUTES
app.get("/", (req, res) => {
    res.status(200).json({message:"Welcome "})
})

mongoose.connect(dbURL).then((dbo)=>{
    console.log("DB connected")
  },(err)=>{
    console.log("error")
  });

// Listen to server
app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`)
})