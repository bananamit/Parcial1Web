import React, { useState } from 'react';

export const CarritoCompra = () => {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState('');
  const [itemQuantity, setItemQuantity] = useState('');

  const addItem = () => {
    if (itemName.trim() !== '' && itemQuantity.trim() !== '') {
      const newItem = {
        name: itemName,
        quantity: itemQuantity
      };
      setItems([...items, newItem]);
      setItemName('');
      setItemQuantity('');
    }
  };

  const sumarCantidades = () => {
    let totalCantidad = 0;
    for (const item of items) {
      totalCantidad += parseInt(item.quantity);
    }
    return totalCantidad;
  };

  return (
    <div>
      <h1>Lista de Compras</h1>
      <div>
        <input
          type="text"
          placeholder="Nombre del elemento"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Cantidad"
          value={itemQuantity}
          onChange={(e) => setItemQuantity(e.target.value)}
        />
        <button onClick={addItem}>Agregar</button>
      </div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <span>{item.name}</span> - <span>{item.quantity}</span>
          </li>
        ))}
      </ul>
      <div>
      <button onClick={() => alert('Cantidad total de productos: ${sumarCantidades()}')}>
          Mostrar Cantidad Total
        </button>
      </div>
      <div>
        <h2>Lista de Productos</h2>
        <ol>
          {items.map((item, index) => (
            <li key={index}>
              <span>{item.name}</span>
            </li>
          ))}
        </ol>
        <p>Total de productos: {sumarCantidades()}</p>
      </div>
    </div>

  );
};
