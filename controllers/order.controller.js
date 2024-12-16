const Order = require("../models/order.model");
const Customer = require("../models/customer.model");
const Product = require("../models/product.model");

const createOrder = async (req, res) => {
    try {
        const { customerId, products } = req.body;

        // Calculate total amount
        let totalAmount = 0;
        for (const item of products) {
            const product = await Product.findById(item.productId);
            totalAmount += product.price * item.quantity;
        }

        const order = new Order({ customerId, products, totalAmount });
        await order.save();
        res.status(201).json(order);
    } catch (err) {
        res.status(400).send(err);
    }
}

const getOrder = async(req,res)=>{
    try{

        const order = await Order.find({})
        res.status(200).json(order)

    }
    catch(error){
        res.status(500).send({ error: error.message });
    }
}

const getOrderById = async(req,res)=>{
    try{

        const order = await Order.findById(req.params.id)
        if(!order){
            return res.status(404).send('Order not found')
        }
        res.status(200).json(order)

    }
    catch(error){
        res.status(500).send({ error: error.message });
    }
}


const deleteOrderById = async(req,res)=>{
    try{

        const order = await Order.findByIdAndDelete(req.params.id)
        if(!order){
            return res.status(404).send('Order not found')
        }
        res.status(204).send()

    }
    catch(error){
        res.status(500).send({ error: error.message });
    }
}

module.exports = {
    createOrder,
    getOrder,
    getOrderById,
    deleteOrderById
}
