const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const userRouter = require('./routes/user')

const app = express()

//TODO: middleware and route 
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use('/users', userRouter)

mongoose.connect('mongodb://localhost:27017/youtubedb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection
db.on('error', console.error.bind(console, 'Connection error: '))
db.once('open', () => console.log('Connection to the DB successful'))

const PORT = process.env.PORT || 5050
app.listen(PORT, () => console.log(`Server listening at port ${PORT}`))