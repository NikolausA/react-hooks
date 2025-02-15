import PropTypes from "prop-types";
import styles from "./input.module.css";

export const Input = ({
  type,
  label,
  icon,
  name,

  placeholder,
}) => {
  return (
    <div className={styles.inputWrapper}>
      {icon && <div className={styles.icon}>{icon}</div>}

      <label className={styles.label} htmlFor={label}>
        {label}
      </label>
      <input
        className={styles.input}
        type={type}
        id={label}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  icon: PropTypes.node,
  name: PropTypes.string,
  placeholder: PropTypes.string,
};
