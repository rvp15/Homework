const mongoose = require('mongoose')

function mongoConfig(){
    mongoose.connect(process.env.MONGO_DB)
    mongoose.connection.once('open',()=>{
        console.log('connected to MongoDB!!')
    })
}

module.exports = mongoConfig