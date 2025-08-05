"use client"
import styles from "./page.module.css";
import ProductCard from "../components/productCard/productCard.jsx";
import { useState, useEffect } from "react";


export default function Home() {
  const [products, setProducts] = useState([
    {
      image: "/images/smartphone1.jpg",
      title: "Smartphone XYZ",
      price: "999.99",
      description: "Smartphone com tela de 6.5 polegadas, 128GB de armazenamento e câmera de 48MP.",
      stars: "⭐⭐⭐⭐⭐",
      grade: 4.8,
      avaliations: 1200
    },
    {
      image: "/images/smartphone2.jpg",
      title: "Smartphone ABC",
      price: "799.99",
      description: "Smartphone com tela de 6.1 polegadas, 64GB de armazenamento e câmera de 12MP.",
      stars: "⭐⭐⭐⭐",
      grade: 4.5,
      avaliations: 800
    }

    ,
    {
      image: "/images/smartphone3.jpg",
      title: "Smartphone DEF",
      price: "899.99",
      description: "Smartphone com tela de 6.7 polegadas, 256GB de armazenamento e câmera de 64MP.",
      stars: "⭐⭐⭐⭐⭐",
      grade: 4.9,
      avaliations: 950
    }

    ,
    {
      image: "/images/smartphone4.jpg",
      title: "Smartphone GHI",
      price: "699.99",
      description: "Smartphone compacto com tela de 5.8 polegadas, 32GB de armazenamento e câmera de 16MP.",
      stars: "⭐⭐⭐⭐",
      grade: 4.2,
      avaliations: 500
    },
    {
      image: "/images/smartphone5.jpg",
      title: "Smartphone JKL",
      price: "1099.99",
      description: "Smartphone premium com tela AMOLED de 6.9 polegadas, 512GB de armazenamento e câmera tripla de 108MP.",
      stars: "⭐⭐⭐⭐⭐",
      grade: 4.9,
      avaliations: 2000
    },
    {
      image: "/images/smartphone6.jpg",
      title: "Smartphone MNO",
      price: "599.99",
      description: "Smartphone intermediário com tela de 6.3 polegadas, 128GB de armazenamento e câmera dupla de 48MP.",
      stars: "⭐⭐⭐⭐",
      grade: 4.3,
      avaliations: 750
    },
    {
      image: "/images/smartphone7.jpg",
      title: "Smartphone PQR",
      price: "849.99",
      description: "Smartphone com bateria de longa duração, tela de 6.4 polegadas e 256GB de armazenamento.",
      stars: "⭐⭐⭐⭐⭐",
      grade: 4.7,
      avaliations: 1100
    },
    {
      image: "/images/smartphone8.jpg",
      title: "Smartphone STU",
      price: "499.99",
      description: "Smartphone básico com tela de 6.0 polegadas, 64GB de armazenamento e câmera de 13MP.",
      stars: "⭐⭐⭐",
      grade: 3.9,
      avaliations: 300
    },
    {
      image: "/images/smartphone9.jpg",
      title: "Smartphone VWX",
      price: "1299.99",
      description: "Smartphone topo de linha com tela de 7.1 polegadas, 1TB de armazenamento e câmera quádrupla de 200MP.",
      stars: "⭐⭐⭐⭐⭐",
      grade: 5.0,
      avaliations: 3500
    },
    {
      image: "/images/smartphone10.jpg",
      title: "Smartphone YZ",
      price: "899.99",
      description: "Smartphone resistente à água, tela de 6.2 polegadas, 256GB de armazenamento e câmera de 50MP.",
      stars: "⭐⭐⭐⭐",
      grade: 4.6,
      avaliations: 900
    }
  ]);

  return (
    <div className={styles.products}>
      {products.map((product, index) => (
        <ProductCard
          key={index}
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