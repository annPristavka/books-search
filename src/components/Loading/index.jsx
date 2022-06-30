import React from 'react'
import img from '../../images/spinner.png'
import './style.scss'
import ClipLoader from "react-spinners/ClipLoader";

const Loading = () => {
    return (
        <div className="spinner">
            <div className="spinner__container">
                <ClipLoader  size={150} className="clipLoader"/>
            </div>
            
        </div>
    )
}

export default Loading