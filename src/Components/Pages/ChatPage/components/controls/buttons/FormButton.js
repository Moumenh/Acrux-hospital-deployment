import React from 'react';

import './Button.scss';

const FormButton = ({ disabled}) => {
    return (
        <>
            <button 
                type="submit" 
                className="primary-button"
                disabled={disabled}>Send</button>
        </>
    );
}

export default FormButton;