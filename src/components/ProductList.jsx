// src/components/ProductList.jsx

import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { toast } from 'react-toastify';

function ProductList() {
  const { addToCart } = useContext(CartContext);

  // Lista de productos de ejemplo
  const products = [
    { id: 1, name: "Café Colombiano", price: 12 },
    { id: 2, name: "Café Brasileño", price: 10 },
    { id: 3, name: "Café Italiano", price: 15 },
  ];

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success(`${product.name} ha sido agregado al carrito`);
  };

  return (
    <div style={styles.container}>
      <h2>Productos Destacados</h2>
      <ul style={styles.list}>
        {products.map((product) => (
          <li key={product.id} style={styles.item}>
            {product.name} - ${product.price}
            <button style={styles.button} onClick={() => handleAddToCart(product)}>
              Agregar al carrito
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
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
  button: {
    marginLeft: "10px",
    padding: "5px 10px",
    backgroundColor: "#4a2c2a",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
};

export default ProductList;
