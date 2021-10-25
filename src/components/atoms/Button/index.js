import React from "react"

const Button = ({title, onClick}) => {
    return (
        <button onClick={onClick} className="rounded-md bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6">{title}</button>
    )
}

export default Button