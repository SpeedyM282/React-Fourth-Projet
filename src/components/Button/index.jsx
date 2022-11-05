import React from 'react';
import './style.css';

export default function Button({txt, width, height, borderRadius, handleClick}) {
  return (
    <button 
    onClick={handleClick}
      className='btn' 
      style={{
        width: width, 
        height: height,
        borderRadius: borderRadius,
      }} 
    >
      {txt}
    </button>
  );
}