import React from "react";
import styles from "../SignIn/SignIn.module.css";
import { Link } from "react-router-dom";

import { useValue } from "../userContext";
const SignIn = () => {
  const { email, showEmail, password, showPassword, handleSubmitForLogin } =
    useValue();

  return (
    <div className={styles.outerContainer}>
      <form className={styles.innerContainer} onSubmit={handleSubmitForLogin}>
        <div className={styles.title}>
          <h3>Sign In</h3>
        </div>

        <div className={styles.email}>
          <input onChange={showEmail} placeholder="Enter Email" value={email} />
        </div>
        <div className={styles.password}>
          <input
            type="password"
            onChange={showPassword}
            placeholder="Enter Password"
            value={password}
          />
        </div>
        <div className={styles.buttonContainer}>
          <button>Sign In</button>
        </div>
        <Link to="/signup">
          <h4>Or Sign Up Instead</h4>
        </Link>
      </form>
    </div>
  );
};

export default SignIn;
