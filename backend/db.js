const mongoose = require("mongoose");


const ConnectMongo = async () =>{

    try{

        await mongoose.connect(process.env.MONGO_URL);
        console.log(`database connected successfully`);

    }catch(error){

        console.log(`Error in database connection ${error}`);
        process.exit(1);

    }

}

module.exports = ConnectMongo;


