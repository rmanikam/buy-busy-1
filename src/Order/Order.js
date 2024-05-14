import React from "react";
import { useValue } from "../productContext";
import styles from "../Order/Order.module.css";
import moment from "moment";

const Order = () => {
  const { cartNew, total } = useValue();
  const date = new Date();
  const formattedDate = moment(date).format("YYYY-MM-DD");

  return (
    <div className={styles.outerContainer}>
      <h1> Your Orders</h1>
      {cartNew.map((cartItem) => {
        return (
          <>
            <h3 className={styles.orderDate}>Ordered On:- {formattedDate} </h3>
            <table className={styles.tableContainer}>
              <thead>
                <tr>
                  <th className={styles.titleHead}>Title</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.titleBody}>{cartItem.title}</td>
                  <td>₹ {cartItem.price}</td>
                  <td>{cartItem.qty}</td>
                  <td>{cartItem.qty * cartItem.price}</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan={4} style={{ textAlign: "right" }}>
                    {total}
                  </td>
                </tr>
              </tfoot>
            </table>
          </>
        );
      })}
    </div>
  );
};

export default Order;
