import React from 'react';

const CartWidget = () => {
    const imgCarrito = "https://icons.veryicon.com/png/o/miscellaneous/flower-mall-color-icon/shopping-cart-114.png";

    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <img 
                src={imgCarrito} 
                alt="Carrito de compras" 
                style={{
                    width: '24px',
                    height: '24px',
                    objectFit: 'contain',
                    cursor: 'pointer'
                }} 
            />
            <span 
                style={{
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                    color: '#3b5998'
                }}
            >
                0
            </span>
        </div>
    );
};

export default CartWidget;
