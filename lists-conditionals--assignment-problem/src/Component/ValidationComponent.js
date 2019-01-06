import React from 'react';

const ValidationComponent = (props) => {
    return (
        <div className="ValidationComponent">
            {props.length > 5 ? "Text long enough" : "Test too short"}
        </div>
    )
}

export default ValidationComponent;
