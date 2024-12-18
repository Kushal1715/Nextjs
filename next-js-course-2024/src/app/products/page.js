import React from "react";

const Products = async (props) => {
  const searchParams = await props.searchParams;
  console.log(searchParams);
  return <div>Products</div>;
};

export default Products;