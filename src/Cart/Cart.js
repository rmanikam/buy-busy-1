import React from "react";
import { useValue } from "../productContext";
import styles from "../Cart/Cart.module.css";
import increase from "../assets/plus.png";
import decrease from "../assets/minus.png";
import { toast } from "react-toastify";
const Cart = () => {
  const {
    cart,
    addToCard,
    removeFromCard,
    removeCartProduct,
    total,
    purchaseItems,
  } = useValue();

  // console.log("cart", cart.length);
  return (
    <>
      {cart.length === 0 && toast.error("No Products In Cart!")}
      {cart.length > 0 ? (
        <div className={styles.cartContainer}>
          <div className={styles.purchaseContainer}>
            <p>Total Price: ₹ {total} </p>
            <button className={styles.purchaseButton} onClick={purchaseItems}>
              Purchase
            </button>
          </div>
          <div className={styles.outerContainer}>
            {cart.map((cartItem) => {
              return (
                <div className={styles.innerContainer} key={cartItem.id}>
                  <div className={styles.imageContainer}>
                    <img
                      src={cartItem.image}
                      alt="product_image"
                      className={styles.image}
                    />
                  </div>
                  <div className={styles.titleContainer}>
                    <h3 className={styles.title}>{cartItem.title}</h3>
                  </div>
                  <div className={styles.priceContainer}>
                    <h3 className={styles.price}>₹ {cartItem.price}</h3>
                  </div>
                  <div className={styles.buttons}>
                    <div
                      className={styles.increaseButton}
                      onClick={() =>
                        addToCard({
                          id: cartItem.id,
                          image: cartItem.image,
                          title: cartItem.title,
                          price: cartItem.price,
                        })
                      }
                    >
                      <img
                        src={increase}
                        alt="increase button"
                        className={styles.increase}
                      />
                    </div>
                    <div className={styles.quantityValue}>
                      <h3 className={styles.quantity}> {cartItem.qty}</h3>
                    </div>
                    <div
                      className={styles.decreaseButton}
                      onClick={() => removeFromCard(cartItem.id)}
                    >
                      <img
                        src={decrease}
                        alt="decrease button"
                        className={styles.decrease}
                      />
                    </div>
                  </div>
                  <div className={styles.cart_btn}>
                    <button
                      className={styles.btn}
                      onClick={() => removeCartProduct(cartItem.id)}
                    >
                      Remove From Cart
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <h1> Cart is Empty!</h1>
      )}
    </>
  );
};

export default Cart;
