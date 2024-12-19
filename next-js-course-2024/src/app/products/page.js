import React from "react";

const Products = async (props) => {
  const searchParams = await props.searchParams;
  console.log(searchParams);
  return <div className="text-center text-5xl">Products</div>;
};

export default Products;