const PORT = 8080
const HOSTNAME = '192.168.1.137' // change to yours (Might change daily so needs updated)
const express = require('express')
const app = express()

//if visit http://192.168.1.215:8080/hello will know if server is working
app.get('/hello', (req, res) => {
    res.json('Hello from Server!!!')
})

app.listen(PORT,HOSTNAME)
console.log(`Server running at http://${HOSTNAME}:${PORT}`)

//if in college use this one - but mobile work with
//app.listen(PORT,() => console.log('Server listening on localhost: '+PORT))