const mongoose = require('mongoose');
const schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const adminSchema = new schema({
    name :{
        type:String,
        required : true
    },
    email:{
        type:String,
        required:true,
        unique : true,
    },
    whoareyou:{
        type:String,
        required:true,
    },
    city:{
        type:String,
        required:true,
    },
    state:{
        type:String,
        required:true,
    },
    nationality:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true 
    }
})

const adminModel = mongoose.model("user",adminSchema);
module.exports = {
    adminModel
}