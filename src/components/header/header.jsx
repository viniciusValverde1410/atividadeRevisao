"use client";
import styles from "./header.module.css";
import products from "../../data/products.js";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Header({ title, subtitle }) {
  const [productCount, setProductCount] = useState(0);

  useEffect(() => {
    setProductCount(products.length);
  }, [products]);

  return (
    <div className={styles.container}>
      <Image priority src="/images/logo.jpg" alt="Logo da loja" className={styles.logo} width={100} height={100} />

      <div className={styles.box}>
        <h1 className={styles.fontElectrolize}>{title}</h1>
        <h2 className={styles.text}>{subtitle}</h2>
        <h3>📊 Total de produtos: {productCount}</h3>
      </div>

      <Image priority src="/images/logo.jpg" alt="Logo da loja" className={styles.logo} width={100} height={100} />
    </div>
  );
}
