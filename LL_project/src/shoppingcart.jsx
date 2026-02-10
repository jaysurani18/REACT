import React, { useState } from 'react';
import './card.css';
export default function ShoppingCart() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  const addItem = () => {
    if (name && price && quantity) {
      const newItem = {
        id: items.length + 1,
        name: name,
        price: price,
        quantity: quantity
      };
      setItems([...items, newItem]);
      setName('');
      setPrice('');
      setQuantity('');
    }
  };

  const removeItem = (id) => {
    const newItems = items.filter(item => item.id !== id);
    setItems(newItems);
  };

  const updateQuantity = (id, newQty) => {
    const updatedItems = items.map(item => {
      if (item.id === id) {
        item.quantity = newQty;
      }
      return item;
    });
    setItems(updatedItems);
  };

  const clearCart = () => {
    setItems([]);
  };

  let subtotal = 0;
  for (let i = 0; i < items.length; i++) {
    subtotal = subtotal + (items[i].price * items[i].quantity);
  }
  let tax = subtotal * 0.1;
  let total = subtotal + tax;

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'container dark-mode' : 'container'}>
      <button className="dark-mode-btn" onClick={toggleDarkMode}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>

      <h1>Shopping Cart</h1>

      <div>
        <h2>Add Item</h2>
        <input
          type="text"
          placeholder="Item name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        /><br />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        /><br />
        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        /><br />
        <button onClick={addItem}>Add to Cart</button>
      </div>

      <div>
        <h2>Cart Items</h2>
        {items.length === 0 ? (
          <p>Cart is empty</p>
        ) : (
          <div>
            {items.map(item => (
              <div key={item.id}>
                <p>{item.name} - Price: {item.price} - Quantity: </p>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.id, e.target.value)}
                />
                <p>Total: {item.price * item.quantity}</p>
                <button onClick={() => removeItem(item.id)}>Remove</button>
              </div>
            ))}
          </div>
        )}
      </div>

      <div>
        <h3>Subtotal: {subtotal}</h3>
        <h3>Tax (10%): {tax}</h3>
        <h3>Total: {total}</h3>
        <button onClick={clearCart}>Clear Cart</button>
      </div>
    </div>
  );
}