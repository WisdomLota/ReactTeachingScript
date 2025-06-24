// src/Button.jsx
import styles from './Button.module.css'; // Import as an object

function Button({ label, onClick }) {
  return (
    <button onClick={onClick} className={styles.button}> {/* Access class via styles object */}
      {label}
    </button>
  );
}
export default Button;
