import React from 'react'
import StartPage from './pages/StartPage';
import QuizPage from './pages/QuizPage';
import Button from './components/Button';

function App() {
  
  const [quizPageSwitcher, setQuizPageSwitcher] = React.useState(1);
  const [data, setData] = React.useState([]);
  const [playAgain, setPlayAgain] = React.useState(true);

  React.useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple')
      .then(res => res.json())
      .then(d => setData(d.results));
  }, [playAgain]);

  function startQuizClick() {
    setQuizPageSwitcher(prev => (prev == -1) ? 1 : (prev - 1));
    if(quizPageSwitcher == -1) setPlayAgain(prev => !prev);
  }
  
  return (
    <div className="App">
      <div className='upper-right-img'></div>
        {
          quizPageSwitcher == 1 ? 
          <StartPage /> : 
          <QuizPage api={data} page={quizPageSwitcher} />
        }
        <Button
          txt={
            quizPageSwitcher == 1 ? 'Start quiz' :
            quizPageSwitcher == 0 ? 'Check answers' :
            'Play again'
          } 
          width='193px'
          height='52px'
          borderRadius='15px'
          handleClick={startQuizClick}
        />
      <div className='bottom-left-img'></div>
    </div>
  )
}

export default App
