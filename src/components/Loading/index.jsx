import React from 'react'
import ClipLoader from "react-spinners/ClipLoader";
import './style.scss'

const Loading = () => {
    return (
        <div className="spinner">
            <div className="spinner__container">
                <ClipLoader size={150} className="clipLoader"/>
            </div>
            
        </div>
    )
}

export default Loading