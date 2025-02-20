import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";

function Checkout() {
  const { cart } = useContext(CartContext);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("credit");
  const [errors, setErrors] = useState({ name: "", address: "", email: "", phone: "" });

  // Validar el formulario antes de enviarlo
  const validateForm = () => {
    const newErrors = { name: "", address: "", email: "", phone: "" };
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phoneRegex = /^[0-9]{10}$/; // Para números de teléfono de 10 dígitos

    if (!name) newErrors.name = "El nombre es obligatorio.";
    if (!address) newErrors.address = "La dirección es obligatoria.";
    if (!email || !emailRegex.test(email)) newErrors.email = "Por favor, ingresa un correo electrónico válido.";
    if (!phone || !phoneRegex.test(phone)) newErrors.phone = "Por favor, ingresa un número de teléfono válido.";

    setErrors(newErrors);
    return !newErrors.name && !newErrors.address && !newErrors.email && !newErrors.phone;
  };

  // Manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert(`Compra realizada por ${name} con un total de $${total.toFixed(2)}`);
      // Aquí podríamos agregar la lógica para procesar el pago y limpiar el carrito
    } else {
      alert("Por favor, complete todos los campos.");
    }
  };

  return (
    <div style={styles.container}>
      <h2>🛒 Finalizar Compra</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío. ¡Agrega algo para comprar!</p>
      ) : (
        <>
          <form onSubmit={handleSubmit} style={styles.form}>
            <div style={styles.inputGroup}>
              <label htmlFor="name">Nombre:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={styles.input}
                required
              />
              {errors.name && <p style={styles.errorText}>{errors.name}</p>}
            </div>
            <div style={styles.inputGroup}>
              <label htmlFor="address">Dirección:</label>
              <input
                type="text"
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                style={styles.input}
                required
              />
              {errors.address && <p style={styles.errorText}>{errors.address}</p>}
            </div>
            <div style={styles.inputGroup}>
              <label htmlFor="email">Correo Electrónico:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={styles.input}
                required
              />
              {errors.email && <p style={styles.errorText}>{errors.email}</p>}
            </div>
            <div style={styles.inputGroup}>
              <label htmlFor="phone">Teléfono:</label>
              <input
                type="text"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                style={styles.input}
                required
              />
              {errors.phone && <p style={styles.errorText}>{errors.phone}</p>}
            </div>
            <div style={styles.inputGroup}>
              <label htmlFor="paymentMethod">Método de pago:</label>
              <select
                id="paymentMethod"
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                style={styles.input}
              >
                <option value="credit">Tarjeta de Crédito</option>
                <option value="paypal">PayPal</option>
                <option value="bank">Transferencia Bancaria</option>
              </select>
            </div>
            <button type="submit" style={styles.submitButton}>
              Confirmar Compra
            </button>
          </form>
          <div style={styles.totalContainer}>
            <h3>Total: ${total.toFixed(2)}</h3>
          </div>
        </>
      )}
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    textAlign: "center",
    backgroundColor: "#f4f4f4",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    marginTop: "20px",
    maxWidth: "800px",
    margin: "0 auto",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  inputGroup: {
    marginBottom: "15px",
    width: "100%",
    maxWidth: "500px",
    textAlign: "left",
  },
  input: {
    width: "100%",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  submitButton: {
    padding: "10px 20px",
    backgroundColor: "#5bc0de",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  totalContainer: {
    marginTop: "20px",
    padding: "10px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  errorText: {
    color: "#d9534f",
    fontSize: "12px",
    marginTop: "5px",
  },
};

export default Checkout;