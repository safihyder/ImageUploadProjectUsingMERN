const mongoose=require("mongoose");
const userSchema= new mongoose.Schema({
    fname:{
        type:String,
        required:true
    },
    imgpath:{
        type:String,
        required:true
    },
    date:{
        type:Date
    }
});
const users=new mongoose.model("usersimgdata",userSchema);
module.exports=users;