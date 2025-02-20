// src/components/Cart.jsx

import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { toast } from 'react-toastify';

function Cart() {
  const { cart, removeFromCart, getTotal } = useContext(CartContext);

  const handleRemove = (product) => {
    removeFromCart(product);
    toast.error(`${product.name} ha sido eliminado del carrito`);
  };

  return (
    <div style={styles.cartContainer}>
      <h2>Tu Carrito</h2>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <div>
          <ul style={styles.list}>
            {cart.map((product) => (
              <li key={product.id} style={styles.item}>
                {product.name} - ${product.price}
                <button
                  style={styles.removeButton}
                  onClick={() => handleRemove(product)}
                >
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
          <div style={styles.total}>
            <strong>Total: ${getTotal()}</strong>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  cartContainer: {
    padding: "20px",
    textAlign: "center",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  item: {
    marginBottom: "10px",
  },
  removeButton: {
    marginLeft: "10px",
    padding: "5px 10px",
    backgroundColor: "#c82333",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
  total: {
    marginTop: "20px",
    fontSize: "18px",
    fontWeight: "bold",
  },
};

export default Cart;
