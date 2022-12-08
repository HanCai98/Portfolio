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

                <div className = "works-about">
                    <p><a href="/">Home</a></p>
                    <p><a href="https://cs.brown.edu/" target = "_blank" rel="noreferrer">Graduate School</a></p>
                </div>
            </div>

            <div class = "works-introduction">
                <div className = "works-introduction-title-section">
                    <p>Work Gallery</p>
                </div>

                <div className = "works-introduction-text-section">
                    <p>
                        I've taken CSCI1300 User Interfaces and User Experience at 2022, Fall semester. 
                        I've learned when to use different interfaces, how to model and represent user interaction, 
                        how to elicit requirements and feedback from users, as well as the principles of user experience design, methods for designing and prototyping interfaces, and user interface evaluation.
                    </p>
                </div>
                
                <br></br>

                <div className = "works-introduction-text-section">
                    <p>
                        Here is a part of my works.
                    </p>
                </div>

                <di className = "works-section">
                    <div className = "work grow blur">
                        <img className='work-image' src="/images/bus.jpeg" alt='a bus with bike rack'/>
                        <div className="work-description">

                        </div>
                    </div>

                    <div className = "work grow blur">
                        <img className='work-image' src="/images/kindergarten.jpeg" alt='children smiling'/>
                    </div>

                    <div className = "work grow blur">
                        <img className='work-image' src="/images/bananas.png" alt='grocery delivery'/>
                    </div>

                    <div className = "work grow blur">
                        <img className='work-image' src="/images/grocery.jpeg" alt='shopping at grocery store'/>
                    </div>
                </di>
            </div>

        </div>
    )
}

export default Works;