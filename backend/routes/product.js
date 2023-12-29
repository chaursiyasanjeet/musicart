const express = require("express");
const router = express.Router();
const Product = require("../models/product");
const isLoggedIn = require("../middleware/isLoggedIn");

//add product api
router.post("/addproduct", async (req, res) => {
  try {
    const {
      brand,
      model,
      images,
      price,
      rating,
      reviewCount,
      about,
      available,
      color,
      headphoneType,
      shortDescription,
      featured,
    } = req.body;

    if (
      !brand ||
      !model ||
      !images ||
      !price ||
      !rating ||
      !reviewCount ||
      !about ||
      !available ||
      !color ||
      !headphoneType ||
      !shortDescription
    ) {
      res.status(400).json({
        status: "FAILED",
        message: "Fileds Empty",
      });
      return;
    }

    const product = new Product({
      brand,
      model,
      images,
      price,
      rating,
      reviewCount,
      about,
      available,
      color,
      headphoneType,
      shortDescription,
      featured,
    });
    await product.save();
    console.log(req.body);
    res.status(200).json({
      status: 200,
      message: "Product added sucessfully",
    });
  } catch (error) {
    next(new Error("Something went wrong! Please try after some time."));
  }
});

//get product
router.get("/product/", async (req, res) => {
  try {
    console.log(req.query);
    const product = await Product.find(
      {},
      {
        brand: 1,
        model: 1,
        shortDescription: 1,
        price: 1,
        color: 1,
        headphoneType: 1,
      }
    );
    res.status(200).json({ stauts: "SUCCESS", data: product });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.get("/productDetails/:id", async (req, res) => {
  try {
    const productdetails = await Product.findById(req.params.id);
    if (!productdetails) {
      return res
        .status(404)
        .json({ status: "FAILED", message: "Job details not found" });
    }
    res.status(200).json({ status: "SUCCESS", data: productdetails });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
