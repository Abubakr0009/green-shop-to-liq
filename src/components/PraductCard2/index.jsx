import React from "react";
import Product from "./Product";
import CardTotal from "./CardTotal";

const ProductCard = () => {
  return (
    <div className="flex justify-between">
      <Product />
      <CardTotal />
    </div>
  );
};

export default ProductCard;
