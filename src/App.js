import './App.css';
import React, {useState} from 'react'


function App() {
  const questions = [
    {
      questionText: 'In past times, what would a gentleman keep in his fob pocket?',
			answerOptions: [
        { answerText:'Watch', isCorrect:true },
        { answerText:'Money', isCorrect:false },
        { answerText:'Keys', isCorrect:false },
        { answerText:'Notebook', isCorrect:false },
      ]
    },
    {
      questionText: 'Area 51 is located in which US state?',
			answerOptions: [
        { answerText:'Nevada', isCorrect:true },
        { answerText:'Arizona', isCorrect:false },
        { answerText:'NYC', isCorrect:false },
        { answerText:'Dallas', isCorrect:false },
      ]
    },
    {
      questionText: 'On a dartboard, what number is directly opposite No. 1?',
			answerOptions: [
        { answerText:'19', isCorrect:true },
        { answerText:'12', isCorrect:false },
        { answerText:'15', isCorrect:false },
        { answerText:'5', isCorrect:false },
      ]
    },
    {
      questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
      ]
    },
    {
      questionText: 'The iPhone was created by which company?',
			answerOptions: [
        { answerText:'Apple', isCorrect:true },
        { answerText:'Amazon', isCorrect:false },
        { answerText:'Microsoft', isCorrect:false },
        { answerText:'Intel', isCorrect:false },
      ]
    } 
  ]

  const[currentQuestion,setCurrentQuestion] = useState(0);
  const[score, setScore] = useState(0)
  const [showScore, setrShowscore] = useState(false)

  const handleAnswerButtonClick = (isCorrect) => {
    
    if(isCorrect){
      setScore(score+1);
    }

    const nextQuestion = currentQuestion + 1;
    
    if (nextQuestion < questions.length){
      setCurrentQuestion(nextQuestion);
    }

    else {
      setrShowscore(true);
    }
  }

  return (
    <div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}

export default App;
