const Customer = require('../models/customer.model');


//====Get ALL Customers===============

const getAllCustomers = async (req, res) => {
  try {
    const products = await Customer.find({});
    res.status(200).send(products);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

//====Add Customers==============================

const addCustomer = async (req, res) => {
  try {
    const product = await Customer.create(req.body);
    res.status(201).send(product);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

//====Get Customer by ID==============================

const getCustomerById = async (req, res) => {
  try {
    const product = await Customer.findById(req.params.id);
    res.status(200).send(product);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

//====Update Customer by ID==============================

const updateCustomerById = async (req, res) => {
  try {
    const product = await Customer.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if(!product){
        return res.status(404).send('Product not found');
    }
    res.status(200).send(product);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

//====Delete Customer by ID==============================

const deleteById = async (req, res) => {
  try {
    const product = await Customer.findByIdAndDelete(req.params.id);
    if(!product){
        return res.status(404).send('Product not found');
    }

  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = {
  getAllCustomers,
  addCustomer,
  getCustomerById,
  updateCustomerById,
  deleteById
};
