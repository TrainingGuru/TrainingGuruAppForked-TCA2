const PORT = 8000
const express = require('express')
const app = express()

//if visit local:8000/hello will know if server is working
app.get('/hello', (req, res) => {
    res.json('Hello from Server')
})




app.listen(PORT, () => console.log('Server is running on PORT '+ PORT))