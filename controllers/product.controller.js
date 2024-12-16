const Product = require('../models/product.model.js');


//====Get ALL Products===============

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).send(products);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

//====Add Products==============================

const addProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).send(product);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

//====Get Product by ID==============================

const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).send(product);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

//====Update Product by ID==============================

const updateProductById = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
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

//====Delete Product by ID==============================

const deleteById = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if(!product){
        return res.status(404).send('Product not found');
    }

  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = {
  getAllProducts,
  addProduct,
  getProductById,
  updateProductById,
  deleteById
};
