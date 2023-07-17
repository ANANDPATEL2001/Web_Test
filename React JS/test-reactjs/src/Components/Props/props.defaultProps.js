import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const Props_defaultProps = (props) => {
    return (
        <>
            <div className='container'>
                <h1>{props.message}</h1>
            </div>
        </>
    )
}

// Below statement will make a default props for the 'Props_defaultProps' component which will be rendered if no 'props' has been provided
Props_defaultProps.defaultProps = {
    message: "Hello, How are you ?",
}

export default Props_defaultProps