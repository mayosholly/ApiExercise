require('dotenv').config()
const express = require('express')
// this is the post router
const postRouter = require('./routes/postRoute')

const mongoose = require('mongoose')

const PORT = process.env.PORT || 5000

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended:true }))
app.use(express.static('uploads'))


const dbConnect = async () => {
    try {
        conn = await mongoose.connect(process.env.MONGODB_URI)
        console.log("Connection success")
    }catch(error){
        console.log(error)
    }
}

dbConnect()

app.use('/', postRouter)

app.listen(PORT, () => {
    console.log(`Your server is running on port ${PORT}`);
})
