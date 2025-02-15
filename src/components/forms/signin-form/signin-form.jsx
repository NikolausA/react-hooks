/* eslint-disable react/prop-types */
import { useState, useRef } from "react";
import { Input } from "../input/input";
import { MdOutlineAlternateEmail } from "react-icons/md";
import styles from "./signinForm.module.css";

export const SigninForm = ({ onSubmit }) => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(inputs);
    formRef.current.reset();
  };
  const handleChange = ({ target }) => {
    setInputs((prev) => ({ ...prev, [target.name]: target.value }));
  };

  const handleReset = () => {
    setInputs({});
  };

  return (
    <form
      ref={formRef}
      className={styles.form}
      onChange={handleChange}
      onSubmit={handleSubmit}
      onReset={handleReset}
    >
      <Input
        type="email"
        name="email"
        placeholder="Enter your email"
        label="Your email"
        icon={<MdOutlineAlternateEmail />}
      />
      <Input
        type="password"
        name="password"
        placeholder="Enter your password"
        label="Your password"
      />
      <button className={styles.button} type="submit">
        Отправить
      </button>
    </form>
  );
};
