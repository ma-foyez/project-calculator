import React from 'react';

const TotalCost = ({ step, totalCost, onReset , answers}) => {

    return (
        <div className="card text-center">
            {
                step === 2 && (
                    <React.Fragment>
                        <p className="description">Please input all the fields to show estimated price </p>
                    </React.Fragment>
                )
            }
            {
                answers.length > 4 && (
                    <React.Fragment>
                        <p className="text-primary">Est Cost</p>
                        <h4 className="price">${totalCost}</h4>
                        <p className="description">This cost will include 2 rounds of corrections at UI design stage, and once the design is finalized, we will processed to development. Project will be divided into 2-3 milestone payments.</p>
                        <button className="custom_brand_btn" onClick={onReset}>Calculate Again</button>
                    </React.Fragment>
                )}

        </div>
    );
};

export default TotalCost;