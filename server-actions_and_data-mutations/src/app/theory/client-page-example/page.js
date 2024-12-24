"use client";

import { fetchProducts } from "@/actions";
import React, { useEffect, useState } from "react";

const ClientPageExample = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const data = await fetchProducts();
      setProducts(data);
      setLoading(false);
    }
    fetchData();
  }, []);

  if (loading) {
    return <h1>Loading products ...</h1>;
  }
  return (
    <div>
      <ul>
        {products && products.length > 0 ? (
          products.map((product, index) => <li key={index}>{product.title}</li>)
        ) : (
          <h1>No products</h1>
        )}
      </ul>
    </div>
  );
};

export default ClientPageExample;
