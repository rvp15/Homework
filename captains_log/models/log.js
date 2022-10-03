//load mongoose
const mongoose = require('mongoose')
//define schema
const Schema = mongoose.Schema
//create log Schema
const logSchema = new Schema({
    title:{type:String,required:true},
    entry:{type:String,require:true},
    broken: Boolean,
    timestamp:{type:Date,default:Date.now},
    updateddate:{type:Date,default:Date.now},

    breakfast:{type:String,require:true},
    lunch:{type:String,require:true},
    dinner:{type:String,require:true},
})

const Log = mongoose.model('Log' , logSchema)//pass name of model and its schema
module.exports = Log