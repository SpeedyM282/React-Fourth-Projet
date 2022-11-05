import React from 'react';
import './style.css';

export default function AnswerBtn({txt, checked, answerClickHandle, page, correct}) {
  function correctCheck() {
    if(page != -1) {
      return checked ? '#D6DBF5' : 'transparent';
    } else {
      return correct ? '#94D7A2' : checked && !correct ? '#F8BCBC' : 'transparent';
    }
  }
  const style = {
    padding: txt.length < 10 ? '5px 17px' : '5px 10px',
    backgroundColor: correctCheck(),
    border: checked ? 'none' : '0.8px solid #4D5B9E',
  };

  return (
    <button 
      className='answer-btn' 
      style={style}
      onClick={answerClickHandle}
    >
      {txt}
    </button>
  );
}