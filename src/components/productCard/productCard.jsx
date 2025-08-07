import styles from "./productCard.module.css";
import Image from "next/image";

export default function ProductCard({
    image,
    title,
    price,
    description,
    stars,
    grade,
    avaliations,
}) {
    return (
        <div className={styles.productCard} data-category="smartphones">
            <div className={styles.productImage}>
                <Image
                    className={styles.productImage}
                    src={image}
                    alt="Imagem do produto"
                    width={300}
                    height={300}
                    style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "4px",  marginTop: "16px" }}
                />
                
            </div>
            <div className={styles.productTitle}>{title}</div>
            <div className={styles.productPrice}>R$ {price}</div>
            <div className={styles.productDescription}>{description}</div>
            <div className={styles.productRating}>
                <span className={styles.stars}>{stars}</span>
                <span>
                    ({grade}) - {avaliations} avaliações
                </span>
            </div>
        </div>
    );
}
