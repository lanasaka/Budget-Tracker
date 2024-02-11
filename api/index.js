const express = require('express');
const cors = require('cors');
require('dotenv').config();
const Transaction=require('./models/Transaction.js')
const mongoose=require("mongoose")
const app = express();

app.use(cors()); // Allow all origins during development
app.use(express.json());

app.get('/api/test', (req, res) => {
  res.json('test ok');
});

app.post('/api/transaction', async(req, res) => {
console.log();
    await mongoose.connect(process.env.MONGO_URL);
    const {name,description,datetime,price}=req.body;
   const transaction=await Transaction.create({name,description,datetime,price});
    res.json(transaction);
});
app.get('/api/transactions',async (req,res)=>{
  await mongoose.connect(process.env.MONGO_URL);
const transactions =await Transaction.find();
res.json(transactions);
});
app.listen(4040);
//PBQm63EDu3lEzJVF
