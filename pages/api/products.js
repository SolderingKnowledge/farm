import products from "../../static/products.json"
import connectDb from "../../utils/connectDb";
connectDb();
// const express = require("express"); // old syntax and i don't do this here
// Routes feature of Next JS
//Next version 9 creates routing which is inside api folder
export default (req, res) => {
    console.log(req.method);
    // res.status(200).send("sending just a string")
    res.status(200).json(products);
}
