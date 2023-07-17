import React, { useEffect, useState } from 'react'

const List = (props) => {
    const { getItems, increment } = props
    const [items, setItems] = useState([])

    useEffect(() => {
        console.log('Updating the Items')
        setItems(getItems(increment))
    }, [getItems])

    return items.map(item => <div className='container-fluid my-2' key={item}>{item}</div>)
}

List.defaultProps = {
    increment: 5,
}

export default List