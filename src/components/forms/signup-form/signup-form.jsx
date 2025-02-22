/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import { Input } from "../input/input";
import { MdOutlineAlternateEmail } from "react-icons/md";
import styles from "./signupForm.module.css";

export const SignupForm = ({ onSubmit }) => {
  const [inputs, setInputs] = useState({
    name: "",
    nik: "",
    email: "",
    gender: "",
    password: "",
    confirmation: "",
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
        type="text"
        name="name"
        placeholder="Enter your name"
        label="Your name"
        asterisk="true"
      />
      <Input
        type="text"
        name="nik"
        placeholder="Enter your nik"
        label="Your nik"
      />

      <div className={styles.wrapper}>
        <h3 className={styles.title}>Select your gender</h3>
        <div>
          <label htmlFor="male">Male</label>
          <input id="male" type="radio" name="gender" value="male" />
          <label htmlFor="female">Female</label>
          <input id="female" type="radio" name="gender" value="female" />
        </div>
      </div>

      <Input
        type="email"
        name="email"
        placeholder="Enter your email"
        asterisk="true"
        label="Your email"
        icon={<MdOutlineAlternateEmail />}
      />
      <Input
        type="password"
        name="password"
        placeholder="Enter your password"
        asterisk="true"
        label="Your password"
      />
      <Input
        type="password"
        name="confirmation"
        placeholder="Retype your password"
        asterisk="true"
        label="Password confirmation"
      />
      <button className={styles.button} type="submit">
        Отправить
      </button>
    </form>
  );
};
