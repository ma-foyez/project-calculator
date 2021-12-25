import React from 'react';

const Start = ({ onQuizStart }) => {
    return (
        <div className="row justify-content-center">
            <div className="col-md-8 custom_bg">
                <div className="card">
                    <div className="card-content">
                        <div className="content text-center p-3">
                            <h2>Let's Start The Discuss What You wWant...</h2>
                            <p>This is not final, it's just that we want to give you an idea according to the demand to guess.</p>
                            <h1>Good luck!</h1>
                            <button className="custom_brand_btn" onClick={onQuizStart}>Start</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Start;