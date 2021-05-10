import express from "express";
import data from './data.js';

const app = express();


app.get("/api/products",  (req, res )=>{
    res.send(data.products);
});
console.log(data.products)


app.listen(5000, ()=>{
    console.log("server is listening in port 5000")
})