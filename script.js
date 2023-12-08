const mongoose = require('mongoose');
const User = require("./User");

// connect mongo
mongoose.connect("mongodb://localhost/testdb").then(() =>{
    console.log("Connected to MongoDB");
}).catch((err)=>{
    console.log(err);
})

run()
async function run(){
    try {
        // const user = await User.create({
        //     name:"gomen", 
        //     age:24,
        //     email:'Bk@gmail.com',
        //     hobbies:["weight Lifting","Bowling"],
        //     address:{
        //         street:"Addis Ketema",
        //         city:"Addis Ababa"
        //     }}) // create user
        // //const user = new User({name:"gomen",age:23}); //create user
        // //await user.save(); //save user 
        // user.name = 'notgomen' //change user name
        // await user.save()// save the change you make 
        // console.log(user)
        const user = await User.where("age")
        .gt("12")
        .where("name")
        .equals("gomen")
        .limit(2)
        .select("age")
        console.log(user)
    }catch(e){
        console.log(e.message)
    }
    }

//create new user
//const user = new User({name:"gomen",age:23})
 //save created user
// user.save().then(() => console.log("User saved"));


    