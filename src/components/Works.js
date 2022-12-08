import React from "react";
import { useNavigate } from "react-router-dom";
import '../styles/works.css'

const Works = (props) => {
    const navigate = useNavigate();


    return (
        <div className = "works-flex-container">
            <div className = "works-navigation-bar">
                <div>
                    <p><a href="/" style={{color: 'white'}}>Smart Fox</a></p>
                </div>

                <div className = "works-about">
                    <p><a href="/" style={{color: 'white'}}>Home</a></p>
                    <p><a href="https://cs.brown.edu/" target = "_blank" rel="noreferrer" style={{color: 'white'}}>Graduate School</a></p>
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
                    <div className = "work grow blur" style={{marginRight:"9.5%"}}>
                        <img className='work-image' src="/images/bus.jpeg" alt='a bus with bike rack'/>
                        <div className="work-description">
                            <div className="work-title">
                                <p>Personas & Storyboarding</p>    
                            </div>

                            <div className="work-text">
                                <p>
                                    Observe real users interacting with the bike rack on bus, 
                                    interview these individuals about their experiences, create personas based on these users, 
                                    and illustrate a storyboard for one of the personas.
                                </p>
                            </div>
                            
                            <button className="work-button" onClick={() => navigate("/personas")}>See Case Study</button>
                        </div>
                    </div>

                    <div className = "work grow blur">
                        <img className='work-image' src="/images/kindergarten.jpeg" alt='children smiling'/>
                        <div className="work-description">
                            <div className="work-title">
                                <p>Responsive Redesign</p>    
                            </div>

                            <div className="work-text">
                                <p>
                                    Analyze and identify flaws in the homepage of a kindergarten at providence. 
                                    Create low-fidelity and high-fidelity prototypes for various screen sizes, 
                                    and build a responsive website based on those prototypes.
                                </p>
                            </div>
                            
                            <button className="work-button" onClick={() => navigate("/redesign")}>See Case Study</button>
                        </div>
                    </div>

                    <div className = "work grow blur" style={{marginRight:"9.5%"}}>
                        <img className='work-image' src="/images/bananas.png" alt='grocery delivery'/>
                        <div className="work-description">
                            <div className="work-title">
                                <p>Iterative Design</p>    
                            </div>

                            <div className="work-text">
                                <p>
                                    Working with three teammates, sketch, create interactive high fidelity prototype, 
                                    design and launch user test. Step by step, go through the full process of mocking up a solution to the a startup's concept.
                                </p>
                            </div>
                            
                            <button className="work-button" onClick={() => navigate("/iterative-design")}>See Case Study</button>
                        </div>
                    </div>

                    <div className = "work grow blur">
                        <img className='work-image' src="/images/grocery.jpeg" alt='shopping at grocery store'/>
                        <div className="work-description">
                            <div className="work-title">
                                <p>React Development</p>    
                            </div>

                            <div className="work-text">
                                <p>
                                    Use interface components, tie the components to an internal data state and develop a shooping page for a grocery store. 
                                    Users could select items out of a list with different filters and sortings, which then aggregates them.
                                </p>
                            </div>
                            
                            <button className="work-button" onClick={() => navigate("/development")}>See Case Study</button>
                        </div>
                    </div>
                </di>
            </div>

        </div>
    )
}

export default Works;