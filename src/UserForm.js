import React, { useState } from 'react';

function UserForm() {
  const [name, setName] = useState(''); // State to hold the input field's value

  const handleChange = (event) => {
    setName(event.target.value); // Update state as the user types
  };

  return (
    <div style={{ margin: '20px', padding: '15px', border: '1px solid lightgray', borderRadius: '5px' }}>
      <h2>Task 4: Controlled Input Form</h2>
      <label htmlFor="nameInput">Enter your name: </label>
      <input
        type="text"
        id="nameInput"
        value={name} // The input's value is controlled by the 'name' state
        onChange={handleChange} // Call handleChange whenever the input changes
        placeholder="Type your name here..."
      />
      {name && <p>Hello, {name}!</p>} {/* Display name only if it's not empty */}
    </div>
  );
}

export default UserForm;