const express = require('express');
const app = express(); 
const cors = require('cors');
const dbConnect = require('./dbconnect/dbconnect');
app.use(express.json());
const router=require('./routes/r1');
require('dotenv').config();
dbConnect();
app.use(cors({
    origin: ['http://localhost:3000']
}))
app.listen(process.env.PORT, () => {
    console.log(`Hello, I'm at port ${process.env.PORT}`);
});
