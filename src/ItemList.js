import React from 'react';

function ItemList() {
  const items = ['Apple', 'Banana', 'Orange', 'Grape', 'Strawberry']; // Define an array of items

  return (
    <div style={{ margin: '20px', padding: '15px', border: '1px solid lightgray', borderRadius: '5px' }}>
      <h2>Task 3: Item List</h2>
      <h3>My Favorite Fruits:</h3>
      <ul>
        {items.map((item, index) => (
          // Use the item itself or index as a key for list items
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;