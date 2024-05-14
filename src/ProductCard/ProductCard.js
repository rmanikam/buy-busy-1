import React from "react";
import styles from "../ProductCard/ProductCard.module.css";
import { useValue } from "../productContext";
const ProductCard = ({ id, image, title, price }) => {
  const { addToCard } = useValue();

  return (
    <>
      <div className={styles.innerContainer}>
        <div className={styles.imageContainer}>
          <img src={image} alt="product_image" className={styles.image} />
        </div>

        <div className={styles.titleContainer}>
          <h3 className={styles.title}>{title}</h3>
        </div>
        <div className={styles.priceContainer}>
          <h3 className={styles.price}>₹ {price}</h3>
        </div>
        <div className={styles.cart_btn}>
          <button
            className={styles.btn}
            onClick={() => addToCard({ id, image, title, price })}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
