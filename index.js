// this allows to stash "artificial env variables" in a file
require('dotenv').config()
const path = require('path')
const express = require('express')
const cors = require('cors')

console.log(process.env.LADY)
console.log(process.env.API_SECRET)

const PORT = process.env.PORT || 5000 // fallback is nice

const server = express()

server.use(express.json())
server.use(cors())
server.use(express.static(path.join(__dirname, 'client/public')))

server.get('/api', (req, res) => {
  res.json({ message: 'Web 45 is awesome!' })
})

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/public', 'index.html'))
})

server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})