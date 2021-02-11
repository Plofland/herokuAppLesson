const dotenv = require('dotenv').config()
const express = require('express')
const cors = require('cors')


const app = express()
const port = process.env.PORT || 9000

app.use(cors())
app.use(express.json())

app.use('/api/*', ( _, res) => {
  res.json({data: 'The API lives!!!'})
})

app.listen(port, () => {
  console.log(`Server is alive on port ${port}`)
})





// console.log("It's alive!")
// console.log(__dirname)
// console.log(__filename)
// console.log(process.env.USERNAME)
// //.USER on macs
// console.log(process.env.PORT)
// console.log(process.env.FOOD)
// console.log(dotenv.FOOD)//undefined
// console.log(dotenv)
// console.log(dotenv.parsed)


