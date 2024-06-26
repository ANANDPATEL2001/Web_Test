import React from 'react'

const fun = (e) => {
    console.log(e.target.value)
}

const Test_React = () => {
    return (
        React.createElement('form', { className: 'form-inline form-responsive' },
            React.createElement('div', { className: 'flex flex-col justify-center my-2' },

                React.createElement('input', {
                    className: 'bg-gray-200 p-2 m-2 rounded w-64',
                    placeholder: 'Enter Name here...',
                    type: 'text',
                    onChange: (e) => fun(e),
                    style: { marginBottom: '5px' }
                }),

                React.createElement('input', {
                    className: 'bg-gray-200 p-2 m-2 rounded w-64',
                    placeholder: 'Enter Password here...',
                    type: 'password',
                    style: { marginBottom: '5px' }
                }),

                React.createElement('input', {
                    className: 'bg-gray-200 p-2 m-2 rounded w-64',
                    placeholder: 'Enter Email here...',
                    type: 'email',
                    style: { marginBottom: '5px' }
                }),

                React.createElement('button', {
                    className: 'bg-gray-200 m-2 p-2 rounded w-64',
                    type: 'submit'
                }, 'Submit')))
    )
}

export default Test_React