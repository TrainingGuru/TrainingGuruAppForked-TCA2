import connection from './Config/DatabaseConfig';

const PORT = 8080
const HOSTNAME = '192.168.1.137' // change to yours (Might change daily so needs updated)
const express = require('express')
const app = express()

const userRoute = require("./Routes/User");

//if visit http://192.168.1.215:8080/hello will know if server is working
app.get('/hello', (req, res) => {
    res.json('Hello from Server!!!')
})

app.use("/user",userRoute);

console.log(`Server running at http://${HOSTNAME}:${PORT}`)
connection.connect(function(err) {
    if (err) {
        return console.error('error: ' + err.message);
    }

    console.log('Connected to the MySQL server.');
});

app.listen(PORT,HOSTNAME)
//if in college use this one - but mobile work with
//app.listen(PORT,() => console.log('Server listening on localhost: '+PORT))