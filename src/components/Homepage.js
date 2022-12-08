import React from "react";
import { useNavigate } from "react-router-dom";
import '../styles/homepage.css'

const Homepage = (props) => {
    const navigate = useNavigate();

    return (
        <div className = "flex-container-row">
            <div className = "navigation-bar">
                <div>
                    <h2><a href="/">Smart Fox</a></h2>
                </div>

                <div className = "about">
                    <h2><a href="/works">Works</a></h2>
                    <h2><a href="https://cs.brown.edu/" target = "_blank">Graduate School</a></h2>
                </div>
            </div>

            <div class = "introduction">
                <div className = "introduction-text-section">
                    <p>Hey, folks!</p>
                    <img src = "images/wave.gif" alt = "wave hand" width="auto" height="70" />
                </div>
                <div className = "introduction-text-section">
                    <p>I'm a computer science master student at <u><a href="https://www.brown.edu/" target = "_blank">Brown University</a></u>.</p>
                </div>
                <div className = "introduction-text-section">
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