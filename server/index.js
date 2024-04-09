const express = require("express");
const app = express();
const cors = require("cors");
require("./db/conn");
const router = require("./routes/router");
const port = 8000;

app.get('/',(req,res)=>{
    res.status(200).json("Served Created");
    })


app.use(express.json())
app.use(cors({
    origin:['https://image-upload-project-using-mern.vercel.app'],
    methods:['POST','GET','DELETE'],
    credentials:true
},
             {
    origin:['https://image-upload-project-using-mern.vercel.app/register'],
    methods:['POST','GET','DELETE','PUT'],
    credentials:true
}
            ));
app.use(router);
app.use("/uploads",express.static("./uploads"));
app.listen(port, () => {
    console.log(`Server started at port no ${port}`)
})
