import React, { useState } from "react";
import styles from "../SignUp/Signup.module.css";

import { useValue } from "../userContext";

const SignUp = () => {
  const {
    name,
    showName,
    email,
    showEmail,
    password,
    showPassword,
    handleSubmitForRegister,
  } = useValue();

  return (
    <form className={styles.outerContainer} onSubmit={handleSubmitForRegister}>
      <div className={styles.title}>
        <h3>Sign Up</h3>
      </div>
      <div className={styles.name}>
        <input onChange={showName} placeholder="Enter Name" value={name} />
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
        <button>Sign Up</button>
      </div>
    </form>
  );
};

export default SignUp;
