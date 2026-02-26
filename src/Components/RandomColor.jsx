import React, { useEffect, useState } from 'react'

const RandomColor = () => {
  const [color, setColor] = useState('#000000');
  const [typeOfColor, setTypeOfColor] = useState('hex')

  const handleCreateRandomHexColor = () => {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    let hexColor = "#";
    for(let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * hex.length);
      hexColor += hex[randomIndex];
    }
    setColor(hexColor);
  }

  const handleCreateRandomRgbColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    setColor(`rgb(${r}, ${g}, ${b})`); // Fixed format
  }

  useEffect(() => {
    if(typeOfColor === 'hex') {
      handleCreateRandomHexColor();
    } else {
      handleCreateRandomRgbColor();
    }
  }, [typeOfColor])

  return (
    <div style={{
      width: "100vw",
      height: "100vh",
      background: color,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "20px",
      transition: "background 0.3s ease"
    }}>
      {/* Button Container */}
      <div style={{
        display: "flex",
        gap: "20px",
        flexWrap: "wrap",
        justifyContent: "center"
      }}>
        <button 
          onClick={() => setTypeOfColor('hex')}
          style={buttonStyle('#f59e0b')}
        >
          Create HEX Color
        </button>
        
        <button 
          onClick={() => setTypeOfColor('rgb')}
          style={buttonStyle('#3b82f6')}
        >
          Create RGB Color
        </button>
        
        <button 
          onClick={typeOfColor === 'hex' 
            ? handleCreateRandomHexColor 
            : handleCreateRandomRgbColor
          }
          style={buttonStyle('#10b981')}
        >
          Generate Random Color
        </button>
      </div>

      {/* Color Display */}
      <div style={{
        marginTop: "100px",
        textAlign: "center",
        color: "white",
        fontSize: "2rem",
        fontWeight: "bold",
        textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
        backgroundColor: "rgba(0,0,0,0.3)",
        padding: "20px 40px",
        borderRadius: "10px"
      }}>
        <h3>{typeOfColor === 'hex' ? 'HEX Color' : 'RGB Color'}</h3>
        <h3>{color}</h3>
      </div>
    </div>
  )
}

// Helper function for button styles
const buttonStyle = (bgColor) => ({
  padding: "15px 25px",
  backgroundColor: bgColor,
  color: "white",
  fontWeight: "bold",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  fontSize: "16px",
  transition: "transform 0.2s, opacity 0.2s",
  boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
})

export default RandomColor