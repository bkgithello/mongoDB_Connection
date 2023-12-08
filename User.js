const mongoose = require('mongoose');

//create schema
const userSchema = new mongoose.Schema({
    name:String,
    age:{
        type:Number,
        min:1,
        max:100,
        validate:{
            validator: v=> v%2 === 0,
            message:props => `${props.value} is not an even number`,
        }
    },
    email: {
        type:String,
        minLength:10,
        required:true,
        lowercase:true,
    },
    createdAt:{
        type:Date,
        immutable:true, //can not be changed at all 
        default:()=> Date.now(),
    },
    updatedAt:{
        type:Date,
        default:()=>Date.now(),
    },
    bestFriend:mongoose.SchemaTypes.ObjectId,
    hobbies:[String],
    address: {
        street:String,
        city:String,
    }
})

//create model
module.exports = mongoose.model("User",userSchema) // User is the collection(Table) Name, 
//Create me a table named User in the format of userSchema.