//--------imports--------
const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const cors = require('cors')
const path = require('path')

const app = express()
const engineRoutes = require('./routes/engine.routes')
const itemRoutes = require('./routes/item.routes')

//--------config--------
require('dotenv').config()
app.set('port', process.env.PORT || 3000)
mongoose.connect(process.env.DB_STRING)
.then(db => console.log('Connected to Mongo'))
.catch(err => console.log(err))
app.use('/documentation', express.static(path.join(__dirname, '../doc/')))
app.use('/public', express.static(path.join(__dirname, '../uploads/img/')))

//--------middlewares--------
app.use(morgan('dev'))
app.use(cors())
app.use(express.urlencoded({
    extended: false
}))

//----------routes----------
app.use('/search', engineRoutes)
app.use('/items', itemRoutes)

//--------server start--------
app.listen(app.get('port'), ()=>{
    console.log('Server started')
})