const express = require("express");
const app = express();
const ConnectMongo = require("./db");
const Users = require("./user_data");
require("dotenv").config();

app.use(express.json())

ConnectMongo();


// getting user data
app.get("/", async (req, res) => {
  try {
    const data = await Users.find({});
    res.send(data);
  } catch (error) {
    res.send(error);
  }
});

// posting user data
app.post("/", async (req, res) => {
  try {
    const payload = req.body;

    const User = new Users(payload);
    await User.save();

    res.status(200).json({ status: "success" });
  } catch (error) {
    res.send(error);
  }
});



app.listen(process.env.PORT, ()=>{
    try{
        console.log(`server is running in this port ${process.env.PORT}`);

    }catch(error){
        console.log(`error in server ${error}`);
    }
})