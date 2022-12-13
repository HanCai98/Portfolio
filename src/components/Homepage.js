import React from "react";
import { useNavigate } from "react-router-dom";
import '../styles/homepage.css'

const Homepage = () => {
    const navigate = useNavigate();

    return (
        <div className = "home-flex-container">
            <div className = "home-navigation-bar">
                <div>
                    <p><a className="home-a" href="/">Smart Fox</a></p>
                </div>

                <div className = "home-about">
                    <button className="text-button" onClick={() => navigate("/works")}>Works</button>
                    <p><a className="home-a" href="https://cs.brown.edu/" target = "_blank" rel="noreferrer">Graduate School</a></p>
                </div>
            </div>

            <div class = "home-introduction">
                <div className = "home-introduction-text-section">
                    <p>Hey, folks!</p>
                    <img src = "images/wave.gif" alt = "wave hand" width="auto" height="70" />
                </div>
                <div className = "home-introduction-text-section">
                    <p>I'm a computer science master student at <u><a className="home-a" href="https://www.brown.edu/" target = "_blank" rel="noreferrer">Brown University</a></u>.</p>
                </div>
                <div className = "home-introduction-text-section">
                    <p>I'm also a passionate UI designer pursuing intuitive solutions.</p>
                </div>

                <div>
                    <button onClick={() => navigate("/works")}>Recent Works</button>
                </div>
            </div>
        </div>
    )
}

export default Homepage;