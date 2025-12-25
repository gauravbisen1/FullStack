const express = require('express');
const app = express();

//cookie parser
const cookieParser = require('cookie-parser');
app.use(cookieParser());

//bcrypt 
const bcrypt = require('bcrypt');

app.get('/test', (req, res) => {
    // res.cookie("name","gaurav");
    // console.log(req.cookies);
    // res.send('Authentication and Authorization!');

    //to hash a password
    bcrypt.genSalt(saltRounds=10, (err, salt)=>{
        bcrypt.hash("myPlaintextPassword", salt, (err, hash)=>{
            // Store hash in your password DB.
            console.log("salt Password: ", salt);
            console.log("hashed Password: ", hash);
        });
        //to check same or not
        bcrypt.compare("myPlaintextPassword", "$2b$10$UC/W6iW4g2RpCi4rqElRKe09mu3vjbL6setWeFg6zTk910fwtyu3W", (err, result)=>{
            // result == true
            console.log("Password Match: ", result);
        });
    })
})

//jwt 
const jwt = require('jsonwebtoken');
app.get('/', (req,res)=>{
    let token = jwt.sign({
        email: "gauravbisen@gmail.com"
    }, "secret");
    res.cookie("token", token);         
    // console.log("Generated Token: ", token);
    res.send("ok");
})
app.get("/read", (req,res)=>{
    console.log(req.cookies.token);
    //how to take data from token
    let data = jwt.verify(req.cookies.token, "secret");
    console.log("Data from token: ", data);
})


app.listen(3000, ()=>{
    console.log('Server is running on port 3000');
})