import React from 'react'

function MainContainer(props) {
    return (
        <>
            {/* The general container created here */}
            <div className='w-4/6 mx-auto'>{props.children}</div>
        </>
    )
}

export default MainContainer