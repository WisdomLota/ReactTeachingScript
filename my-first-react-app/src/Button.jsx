JavaScript
// src/Button.jsx
function Button({ label, onClick }) { // Destructure both label and onClick props
  return (
    <button onClick={onClick} style={{ margin: '5px', padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>
      {label}
    </button>
  );
}

export default Button;
