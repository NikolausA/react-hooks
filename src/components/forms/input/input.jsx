import PropTypes from "prop-types";
import styles from "./input.module.css";

export const Input = ({
  type,
  label,
  icon,
  name,
  description,
  size = "md",
  placeholder,
  iconPosition = "left",
  error,
  disabled = false,
  asterisk = false,
  variant = "default",
  border = "brdMd",
}) => {
  return (
    <div className={`${styles.componentWrapper} ${styles[size]}`}>
      <label className={styles.label} htmlFor={label}>
        {label}
        {asterisk && <span className={styles.asterisk}>*</span>}
      </label>
      {description && <span className={styles.description}>description</span>}
      <div className={`${styles.inputWrapper} ${styles[size]}`}>
        {icon && (
          <div className={`${styles.icon} ${styles[iconPosition]}`}>{icon}</div>
        )}
        <input
          className={`${styles.input} ${styles[variant]} ${styles[border]}`}
          type={type}
          id={label}
          name={name}
          placeholder={disabled ? "disabled" : placeholder}
          disabled={disabled}
        />
      </div>

      {error && <span className={styles.error}>error</span>}
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  icon: PropTypes.node,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  description: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  error: PropTypes.string,
  disabled: PropTypes.boolean,
  asterisk: PropTypes.boolean,
  variant: PropTypes.oneOf(["default", "filled", "unstyled"]),
  iconPosition: PropTypes.oneOf(["left", "right"]),
  border: PropTypes.oneOf(["brdSm", "brdMd", "brdLg"]),
};
