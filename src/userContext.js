import React, { useState } from "react";
import { createContext, useContext } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";
const userContext = createContext();

function useValue() {
  const value = useContext(userContext);
  return value;
}
const CustomUserContext = ({ children }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  const showName = (e) => {
    setName(e.target.value);
  };
  const showEmail = (e) => {
    setEmail(e.target.value);
  };
  const showPassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogout = () => {
    setUser("");
    navigate("/signin");
  };
  console.log("userContext", user);

  const handleSubmitForRegister = async (e) => {
    e.preventDefault();

    if (name.trim() === "" || email.trim() === "" || password.trim() === "") {
      toast.error("Please enter valid details");
    } else {
      try {
        await createUserWithEmailAndPassword(auth, email, password).then(
          (userCredential) => {
            // Signed up
            const user = userCredential.user;
            setUser(user);
            console.log("user", user);
            navigate("/");
          }
        );
      } catch (error) {
        console.log("Error", error);
        toast.error("Error(auth/email-already-in-use");
      }
    }
  };

  const handleSubmitForLogin = async (e) => {
    e.preventDefault();

    if (email.trim() === "" || password.trim() === "") {
      toast.error("Please enter valid details");
    } else {
      try {
        await signInWithEmailAndPassword(auth, email, password).then(
          (userCredential) => {
            // Signed in
            const user = userCredential.user;
            setUser(user);
            console.log("user", user);
            navigate("/");
          }
        );
      } catch (error) {
        console.log("Error", error);
        toast.error("Error(auth/wrong-password");
      }
    }
  };

  return (
    <userContext.Provider
      value={{
        name,
        setName,
        email,
        setEmail,
        password,
        setPassword,
        showName,
        showEmail,
        showPassword,
        handleSubmitForRegister,
        handleSubmitForLogin,
        user,
        setUser,
        handleLogout,
      }}
    >
      {children}
    </userContext.Provider>
  );
};

export { useValue };

export default CustomUserContext;
