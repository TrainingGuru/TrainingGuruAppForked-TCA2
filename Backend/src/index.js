

const PORT = 8080
// const HOSTNAME = '192.168.1.137' // change to yours (Might change daily so needs updated)
const express = require('express')
const app = express()
const database = require("./Config/DatabaseConfig.js");
const userRoute = require("./Routes/User.js");
const trainerRoute = require("./Routes/Trainer.js");

//if visit http://192.168.1.215:8080/hello will know if server is working
app.get('/hello', (req, res) => {
    res.json('Hello from Server!!!')
})

app.use("/User",userRoute);
app.use("/Trainer",trainerRoute);



// connection.connect(function(err) {
//     if (err) {
//         return console.error('error: ' + err.message);
//     }
//
//     console.log('Connected to the MySQL server.');
// });

// console.log(`Server running at http://${HOSTNAME}:${PORT}`)
async function testConection(){
    try {
        await database.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
testConection();

//app.listen(PORT,HOSTNAME)
//if in college use this one - but mobile work with
console.log(`Server running at http://localhost:${PORT}`)
app.listen(PORT,() => console.log('Server listening on localhost: '+PORT))