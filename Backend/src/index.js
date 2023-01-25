const PORT = 8080
// const HOSTNAME = '192.168.1.137' // change to yours (Might change daily so needs updated)
const express = require('express')
const app = express()
const database = require("./Config/DatabaseConfig.js");
const userRoute = require("./Routes/User.js");
const trainerRoute = require("./Routes/Trainer.js");

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use((_, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});


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



database.sync({ force: false })
    .then(() => {
        console.log('re-sync done!')
    })
//app.listen(PORT,HOSTNAME)
//if in college use this one - but mobile work with
console.log(`Server running at http://localhost:${PORT}`)
app.listen(PORT,() => console.log('Server listening on localhost: '+PORT))