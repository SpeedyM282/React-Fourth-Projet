import React from 'react';
import QuestionField from '../../components/QuestionField';
import './style.css';

export default function QuizPage({api, page}) {
  const entities = {
    '&#039;': "'",
    '&quot;': '"',
    '&nbsp;': ' ',
    '&lt;': '<',
    '&gt;': '>',
    '&amp;': '&',
    '&apos;': "'",
    '&cent;': '¢',
    '&pound;': '£',
    '&yen;': '¥',
    '&euro;': '€',
    '&copy;': '©',
    '&reg;': '®',
  };

  const questionFieldArray = api.map(e => {
    const allAnswers = [...e.incorrect_answers, e.correct_answer];
    
    function quizPageSwitcher() {
      if(page == 0) {
        return (
          <QuestionField 
            key={e.correct_answer}
            correctAnswer={e.correct_answer}
            question={
              e.question
                .split(' ')
                  .map(e => e.replace(/&#?\w+;/, match => entities[match]))
                    .join(' ')
            }
            answers={
              allAnswers.map(e => {
                  return e.split(' ')
                      .map(e => e.replace(/&#?\w+;/, match => entities[match]))
                        .join(' ');
                }
              )
            }
          />
        );
      } else if(page == -1) {
        return (
          <QuestionField 
            key={e.correct_answer}
            page={page}
            correctAnswer={e.correct_answer}
            question={
              e.question
                .split(' ')
                  .map(e => e.replace(/&#?\w+;/, match => entities[match]))
                    .join(' ')
            }
            answers={
              allAnswers.map(e => {
                  return e.split(' ')
                      .map(e => e.replace(/&#?\w+;/, match => entities[match]))
                        .join(' ');
                }
              )
            }
          />
        );
      }
    }
    return quizPageSwitcher();
  })

  return (
    <div className='quiz-page-wrapper' >
      {questionFieldArray}
    </div>
  );
}