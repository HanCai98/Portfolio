import React from "react";
import { useNavigate } from "react-router-dom";
import '../styles/works.css'

const Works = (props) => {
    const navigate = useNavigate();


    return (
        <div className = "works-flex-container">
            <div className = "works-navigation-bar">
                <div>
                    <p><a href="/">Smart Fox</a></p>
                </div>

                <div className = "about">
                    <p><a href="/">Home</a></p>
                    <p><a href="https://cs.brown.edu/" target = "_blank" rel="noreferrer">Graduate School</a></p>
                </div>
            </div>
        </div>
    )
}

export default Works;