import React, { useState, useEffect, useRef } from 'react';
import { ProgressBar } from 'react-bootstrap';

const Question = ({ data, step, answers, onAnswerUpdate, numberOfQuestions, activeQuestion, onSetActiveQuestion, onSetStep }) => {

    const [selected, setSelected] = useState('');
    const [error, setError] = useState('');
    const radiosWrapper = useRef();
    const [selectedValue, setSelectedValue] = useState("")
    const [prevBtnActive, setPrevBtnActive] = useState(false);

    useEffect(() => {
        const findCheckedInput = radiosWrapper.current.querySelector('input:checked');
        if (findCheckedInput) {
            findCheckedInput.checked = false;
        }
    }, [data]);

    useEffect(() => {
        if (answers.length > 0) {
            setPrevBtnActive(true);
        } else {
            setPrevBtnActive(false)
        }
    }, [answers]);

    const changeHandler = (e) => {
        setSelected(e.target.value);
        setSelectedValue(e.target.value)
        if (error) {
            setError('');
        }
    }

    const nextClickHandler = (e) => {
        if (selected === '') {
            return setError('Please select one option!');
        }
        onAnswerUpdate(prevState => [...prevState, { question: data.question, price: selected }]);
        setSelectedValue()
        setSelected('');
        if (activeQuestion < numberOfQuestions - 1) {
            onSetActiveQuestion(activeQuestion + 1);
        } else {
            onSetStep(3);
        }
    }
    const clickPreviousHandler = (e) => {
        const newAnswers = answers.filter((element, index) => index < answers.length - 1);
        onAnswerUpdate(newAnswers);
        setSelectedValue()
        setSelected('');
        if (activeQuestion < numberOfQuestions + 1) {
            onSetActiveQuestion(activeQuestion - 1);
        } else {
            onSetStep(3);
        }
    }

    return (
        <div className="question_content">
            <div className="card-content">
                <div className="content">
                    <h4 className="mb-5 question">{data.question}</h4>
                    <div className="control" ref={radiosWrapper}>
                        {data.choices.map((choice, i) => (
                            <label className={choice.value === selectedValue ? "radio has-background-light select_option valueIsActive" : "radio has-background-light select_option"} key={i}>
                                <input type="radio" name="answer" value={choice.value} onChange={changeHandler} />
                                {choice.label}
                            </label>
                        ))}
                    </div>
                    {error && <div className="text-danger">{error}</div>}

                    <div className="status_section">
                        {
                            prevBtnActive === true &&
                            <button className="mt-4 custom_brand_btn" onClick={clickPreviousHandler}>Previous</button>

                        }
                        <ProgressBar variant="info" now={answers.length * 20} />
                        <button className="mt-4 custom_brand_btn" onClick={nextClickHandler}>Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Question;