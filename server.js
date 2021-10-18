const mongoose = require('mongoose')
const dotenv = require('dotenv')

process.on('uncaughtException', err => {
  console.log(err.name, err.message)
  console.log('UNCAUGHT EXCEPTION, shutting down......')
    process.exit(1)

})

dotenv.config({path: './config.env'})
const app =  require('./app')

const DB = process.env.DATABASE

mongoose.connect(DB,  {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log("Successfully connect to MongoDB."))
  .catch(err => console.error("Connection error", err));
  
const port = 3000;
const server = app.listen(port , () => {
    console.log(`Listening to port ${port}`)
})


process.on('unhandledRejection' , err => {
  console.log(err.name, err.message)
  console.log('UNHANDLE REJECTION, shutting down......')
  server.close(() => {
    process.exit(1)
  })
})


