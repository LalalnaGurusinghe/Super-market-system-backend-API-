const express = require('express')
const app = express()
const Customer = require('./models/customer.model')
const mongoose = require('mongoose');
const PORT = 4000
const Productroute = require('./routes/product.route')
const CustomerRoute = require('./routes/customer.route')
const OrderRoute = require('./routes/order.route')

// Middleware
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('Hello World this is a test!')
})

app.use('/api', Productroute)
app.use('/api', CustomerRoute)
app.use('/api', OrderRoute)




// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://admin:12345Lmg@backenddb.l4waw.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connected to the database");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Connection failed:", err.message);
  });