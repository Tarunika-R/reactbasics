import React, { useState } from 'react';

function BirthdayMessage() {
  const [name, setName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = () => {
    if (name.trim() !== '') {
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setName('');
    setIsSubmitted(false);
  };

  return (
    <div style={styles.container}>
      <h1>🎉 Birthday Message Generator 🎂</h1>
      {!isSubmitted ? (
        <div>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={handleNameChange}
            style={styles.input}
          />
          <button onClick={handleSubmit} style={styles.button}>
            Generate Message
          </button>
        </div>
      ) : (
        <div>
          <h2 style={styles.message}>
            🎈 Happy Birthday, {name}! 🎉
          </h2>
          <button onClick={handleReset} style={styles.button}>
            Reset
          </button>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    marginTop: '50px',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    marginRight: '10px',
    width: '200px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
  },
  message: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#FF5722',
  },
};

export default BirthdayMessage;
