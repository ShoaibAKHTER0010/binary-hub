import React from 'react';

const CardItem = ({ image, title, description }) => {
  return (
    <div className="card" style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px', width: '100%', maxWidth: '300px', margin: '20px auto' }}>
      <img src={image} alt={title} style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
      <h3 style={{ fontSize: '20px', marginTop: '10px', fontFamily: 'Manrope', color: '#333' }}>{title}</h3>
      <p style={{ fontSize: '14px', color: '#555', marginBottom: '20px' }}>{description}</p>

      {/* Read more button with icon */}
      <button
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%', // Full width
          padding: '10px 0', // 23px top and bottom padding
          fontSize: '16px', // Text size
          backgroundColor: '#9A2935', // Button background color
          color: 'white', // Text color
          border: 'none', // Remove default border
          borderRadius: '8px', // Rounded corners
          cursor: 'pointer', // Pointer cursor on hover
          fontWeight: 'bold', // Text boldness
          textAlign: 'center', // Center align text
          transition: 'background-color 0.3s ease', // Smooth background color transition
        }}
        onClick={() => alert('Read more clicked!')} // Example onClick action
      >
        <span style={{ marginRight: '10px' }}>Read more</span> {/* Text */}
       {/* FontAwesome icon */}
      </button>
    </div>
  );
};

export default CardItem;
