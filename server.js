const express=require("express")
const cors=require("cors")
const dotenv=require("dotenv")
const  portfolioRouter  = require("./routes/portfolioRouter")
const path=require("path")

dotenv.config();

const app=express()
app.use(cors())
app.use(express.json())

app.use(express.static(path.join(__dirname,"./client/build")))

app.use("/api/v4/portfolio/",portfolioRouter)

app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"./client/build/index.html"))
})

const port=process.env.PORT || 9090;

app.listen(port,()=>{
    console.log(`Connection successful and running on ${port}`)
})