import React from 'react';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return (
        <nav style={{ backgroundColor: '#3b5998', color: 'white', padding: '10px' }}>
            <div>
                <h1>Mi Tienda</h1>
            </div>
            <ul style={{ display: 'flex', listStyle: 'none', gap: '10px' }}>
                <li>Inicio</li>
                <li>Productos</li>
                <li>Contacto</li>
            </ul>
            <CartWidget />
        </nav>
    );

};

export default NavBar;