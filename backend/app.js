const express=require('express');
require('dotenv').config();
const authRoutes=require("./routes/auth");
const cors=require("cors")

const app=express();
require('./database/index');


//send a message
// client.messages
//   .create({
//      body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
//      from: '+12055189433',
//      to: '+918374426050'
//    })
//   .then(message => console.log(message.sid)).catch((err)=>{
//       console.log(err)
//   })

app.use(express.urlencoded({extended:false}));
app.use(express.json())
app.use(cors())

const PORT=3007

app.use("/auth",authRoutes);
app.use(require("./routes/save"))
app.listen(PORT,()=>{
    console.log(`Server is running at port ${PORT}`)
})