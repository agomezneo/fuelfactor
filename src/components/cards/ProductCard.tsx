// ProductCard.tsx
import React from "react";
import Image from "next/image";
import styles from "@/styles/components/cards/product_card.module.scss";
import { Product } from "@/types/ProductType";

import Button from "../buttons/PrimaryButton";
interface ProductCardProps {
  product: Product;
  principal?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, principal }) => {
  return (
    <article className={principal ? `${styles.principal_product_card}` : `${styles.product_card}`}>
      <div 
        className={styles.product_image}
        style={{
          backgroundImage: `url(${product.image})`
        }}
      >
      </div>
      <div>
        <h2 className={styles.product_title}>{product.name}</h2>
        {principal && <p className={styles.product_description}>Maximiza el rendimiento y protege tu motor con Fuel Factor X, en su presentación de 4oz para tratar hasta 320 galones. Su fórmula avanzada optimiza el consumo y reduce emisiones, mientras cuida tu sistema contra corrosión y residuos. Ideal para quienes buscan eficiencia y calidad superior. Experimenta la diferencia y lleva tu rendimiento al máximo. ¡Prueba Fuel Factor X hoy y transforma tu manera de conducir!</p>}
        <p className={styles.product_price}>Price: € {product.price}</p>

        <Button
          primary
          href={product.urls}
        >

          <h3 className={styles.button_text}>Comprar ahora</h3>
        </Button>
      </div>
    </article>
  );
};

export default ProductCard;
