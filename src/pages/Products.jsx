import React from "react";
import { useLoaderData } from "react-router-dom";

export default function ProductsPage() {
  const products = useLoaderData();
  return (
    <div>
      <h2>Product</h2>
      {products.map((item) => (
        <div key={item.id}>
          <h4>{item.title}</h4>
          <p>{item.price}</p>
        </div>
      ))}
    </div>
  );
}
