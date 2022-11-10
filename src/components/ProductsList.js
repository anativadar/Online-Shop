import React, {Component} from "react";
import products from "../pages/Products";
import Product from "./Product.js";



class ProductList extends React.Component {
    render() {
        return<div class="grid sm:grid-cols3 gap-6">
            {products.map(function(product){
                return <Product {...product} />
            })}
        </div>
    }
}

export default ProductList;