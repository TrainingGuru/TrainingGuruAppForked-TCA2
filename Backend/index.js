const PORT = 8080
const HOSTNAME = '192.168.1.215' // change to yours
const express = require('express')
const app = express()

//if visit http://192.168.1.215:8080/hello will know if server is working
app.get('/hello', (req, res) => {
    res.json('Hello from Server!!!')
})

app.listen(PORT,HOSTNAME)
console.log(`Server running at http://${HOSTNAME}:${PORT}`)