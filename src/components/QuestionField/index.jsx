import React from 'react';
import {nanoid} from 'nanoid'
import AnswerBtn from '../AnswerBtn';
import './style.css';

export default function QuestionField({question, answers, correctAnswer, page}) {

  const [answerBtn, setAnswerBtn] = React.useState(allAnswerBtns());

  function generateNewAnswerBtn() {
    return {
      id: nanoid(),
      isChecked: false,
      isCorrect: false,
    }
  }

  function allAnswerBtns() {
    const newAnswerBtn = [];
    answers.forEach(() => {
      let answerBtn = generateNewAnswerBtn();
      let val = answers[Math.floor(Math.random()*4)];

      function exists(a) { return newAnswerBtn.some(e => e.value == a) };
      let b = exists(val);
      while(b) {
        val = answers[Math.floor(Math.random()*4)];
        b = exists(val);
      }
      
      
      if(!b) {
        answerBtn.value = val;
        if(answerBtn.value == correctAnswer) {
          answerBtn.isCorrect = true;
        }
        newAnswerBtn.push(answerBtn);
      }
    });
    return newAnswerBtn;
  }

  function answerClickHandle(id) {
    setAnswerBtn(prev => prev.map((e) => e.id == id ? {...e, isChecked: !e.isChecked,} : e));
  }

  const answerBtns = answerBtn.map(e => {
    return (
      <AnswerBtn
        key={nanoid()}
        txt={e.value}
        checked={e.isChecked}
        correct={e.isCorrect}
        page={page}
        answerClickHandle={() => answerClickHandle(e.id)}
      />
    );
  })

  return (
    <div className='question-field-wrapper'>
      <div className='question-txt-wrapper' >
        {question}
      </div>

      <div className='answerbtns-wrapper'>
        {answerBtns}
      </div>
    </div>
  );
}