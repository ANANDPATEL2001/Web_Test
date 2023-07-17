import React from 'react'

import Component_Header from './Component.Header'

const Component_Layout = (Component) => (...props) => {
    return (
        <>
            <Component_Header />
            <Component {...props} />
        </>
    )
}

export default Component_Layout