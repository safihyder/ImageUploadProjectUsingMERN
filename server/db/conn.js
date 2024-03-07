const mongoose=require("mongoose");
const DB="mongodb+srv://alqaim0987:alqaim0987@cluster0.zfmlj4t.mongodb.net/ImgUpload?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(DB).then(()=>{
    console.log("connected")
}).catch((err)=>{
console.log('error'+ err.message)
})