import React from 'react'

function MainContainer(props) {
    return (
        <>
            <div className='w-4/6 mx-auto'>{props.children}</div>
        </>
    )
}

export default MainContainer