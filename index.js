const express = require("express");
const app = express();
const dbconnect = require('./config/dbconnect');
const specials = require("./modals/specialSchema")
const cors = require('cors');
const bodyparser = require('body-parser')
const entrypointRoute = require("./Routes/entrypointRoute");
const specialRouter = require("./Routes/specialRoutes");
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}))
app.use(cors({
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization']
}));
// database connectivity 
dbconnect();

app.use("/",entrypointRoute);
app.use("/special",specialRouter);

// data base ki connectivity 
app.listen(4040,()=>{
    let a=10;
    console.log(a);
});