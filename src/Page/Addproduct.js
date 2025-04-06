import React, { useState } from 'react';

function AddProduct() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const url = `http://localhost:3000/addproduct?name=${encodeURIComponent(name)}&price=${encodeURIComponent(price)}`;
      const response = await fetch(url, { method: 'POST' });
  
      if (response.ok) {
        const text = await response.text();
        setMessage(text);
      } else {
        // Handle error response here (e.g., if not logged in)
        setMessage('Error: You need to be logged in to add a product.');
      }
    } catch (error) {
      console.error(error);
      setMessage('Error adding product');
    }
  };
  
  return (
    <div style={{ padding: '20px' }}>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Product Name:&nbsp;
            <input 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              placeholder="Enter product name"
            />
          </label>
        </div>
        <div style={{ marginTop: '10px' }}>
          <label>
            Price:&nbsp;
            <input 
              type="number" 
              value={price} 
              onChange={(e) => setPrice(e.target.value)} 
              placeholder="Enter price"
            />
          </label>
        </div>
        <button style={{ marginTop: '10px' }} type="submit">Add Product</button>
      </form>
      {message && <p style={{ marginTop: '20px' }}>{message}</p>}
    </div>
  );
}

export default AddProduct;
