import React from 'react'
import './button.css'

export default function Button(props) {
    const { buttonText, clickHandler } = props

    return (
        <>

            <button className="btn" onClick={clickHandler} >{buttonText} </button>
        </>
    )
}
Button.defaultProps = {
    type: 'button'
}