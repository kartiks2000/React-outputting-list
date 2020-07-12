import React from 'react';

const person = (props) => {
    return(
        <div>
            <h1>i am <span  onClick={props.click}>{props.name}</span> and i am {props.age} years old.</h1>
        </div>
    );
};

export default person;