import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.link}>Inicio</Link>
      <Link to="/cart" style={styles.link}>Carrito</Link>
    </nav>
  );
}

const styles = {
  nav: {
    backgroundColor: '#4a2c2a',
    padding: '10px',
    textAlign: 'center',
  },
  link: {
    color: 'white',
    margin: '0 15px',
    textDecoration: 'none',
  },
};

export default Navbar;
