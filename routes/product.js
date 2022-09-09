const router = require('express').Router()

const Product = require("../model/product")

/* Add Product*/ 
router.post("/addproduct", async(req, res) => {
    const newProduct =  new Product ({
        name: req.body.name,
        price: req.body.price,
    })

    try {
        const savedProduct = await newProduct.save();
        res.status(200).json(savedProduct) ;
    }
    catch (err)  {
        res.status(500).json(err);
    }
})
module.exports = router;
/* Get Product*/ 