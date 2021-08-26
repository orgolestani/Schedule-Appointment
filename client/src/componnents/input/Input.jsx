import React from 'react'

export default function Input(props) {
    let { id,type, name, placeholder,onChange,value } = props
    return (
        <>
            <input id={id} type={type} name={name} placeholder={placeholder} onChange={onChange} />
        </>
    )
}
    