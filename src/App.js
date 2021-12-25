import './App.css';
import { useState, useEffect } from 'react';
import Start from './components/start/Start';
import TotalCost from './components/totalCost/TotalCost';
import Question from './components/question/Question';
import { data } from './assets/data/data';

let interval;

function App() {

  const [step, setStep] = useState(1);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [time, setTime] = useState(0);

  useEffect(() => {
    if (step === 3) {
      clearInterval(interval);
    }
  }, [step]);

  const quizStartHandler = () => {
    setStep(2);
    interval = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);
  }

  const resetClickHandler = () => {
    setActiveQuestion(0);
    setAnswers([]);
    setStep(2);
    setTime(0);
    interval = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);
  }

  return (
    <div className="app">
      <div className="container">
        <h2 className="brand_title">Calculate your project</h2>
        {step === 1 && <Start onQuizStart={quizStartHandler} />}
        {
          step > 1 &&
          <div className="custom_bg">
            <h6 className="contact_to_more">want to discuss your project in details? <a href="tel:+0056562656">schedule a call here</a></h6>
            <div className="row justify-content-center">
              <div className="col-md-8 border_light">
                {step === 2 && (
                  <Question
                    data={data[activeQuestion]}
                    onAnswerUpdate={setAnswers}
                    answers={answers}
                    numberOfQuestions={data.length}
                    activeQuestion={activeQuestion}
                    onSetActiveQuestion={setActiveQuestion}
                    onSetStep={setStep}
                    step={step}
                  />
                )}
               
              </div>
              <div className="col-md-4 mt-5">
                <TotalCost
                  step={step}
                  answers={answers}
                  onReset={resetClickHandler}
                  totalCost={answers.reduce((sum, li) => sum + parseFloat(li.price), 0)}
                />
              </div>
            </div>
          </div>

        }
      </div>
    </div>

  );
}

export default App;
