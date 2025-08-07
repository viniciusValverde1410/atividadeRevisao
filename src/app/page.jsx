"use client"
import styles from "./page.module.css";
import ProductCard from "../components/productCard/productCard.jsx";
import products from "../data/products.js";

export default function Home() {

  return (
    <div className={styles.products}>
      {products.map((product,) => (
        <ProductCard
          key={product.id}
          image={product.image}
          title={product.title}
          price={product.price}
          description={product.description}
          stars={product.stars}
          grade={product.grade}
          avaliations={product.avaliations}
        />
      ))}
    </div>
  );
}