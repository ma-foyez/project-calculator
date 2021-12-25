import React from 'react';
import Congratulation from "../../assets/img/Congratulation.gif"
const Greetings = () => {
    return (
        <div className="greeting_content text-center">
            <img src={Congratulation} alt="greeting img" />
            <h3 className="mt-3">Congratulations! If you have any questions talk to us without any hesitation.</h3>
        </div>
    );
};

export default Greetings;