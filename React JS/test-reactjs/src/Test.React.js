import React from 'react'

const fun = (e) => {
    console.log(e.target.value)
}

const Test_React = () => {
    return (
        React.createElement('form', { className: 'form-inline form-responsive' },
            React.createElement('div', { className: 'container my-2' },

                React.createElement('input', { className: 'form-control', placeholder: 'Enter Name here...', value: '', type: 'text', onChange: (e) => fun(e), style: { marginBottom: '5px' } }),

                React.createElement('input', { className: 'form-control', placeholder: 'Enter Password here...', value: '', type: 'password', style: { marginBottom: '5px' } }),

                React.createElement('input', { className: 'form-control', placeholder: 'Enter Email here...', value: '', type: 'email', style: { marginBottom: '5px' } }),

                React.createElement('button', { className: 'btn btn-outline-primary', type: 'submit' }, 'Submit')))
    )
}

export default Test_React