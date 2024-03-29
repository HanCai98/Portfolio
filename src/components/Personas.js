import React from "react";
import { useNavigate } from "react-router-dom";
import '../styles/personas.css'

const Personas = () => {
    const navigate = useNavigate();
    
    return (
        <div className="personas-container">
            <div className = "personas-navigation-bar">
                <div>
                    <p><a className="personas-a" href="/">Smart Fox</a></p>
                </div>

                <div className = "personas-about">
                    <p><a className="personas-a" href="/">Home</a></p>
                    <button className="text-button" onClick={() => navigate("/works")}>Works</button>
                </div>
            </div>

            <div className="personas-content">
                <div className = "personas-flex-container-col-meta">
                    <button className="text-button" onClick={() => window.scrollTo(0, 0)}>Bus Bike Rack</button>
                    <div className = "personas-meta-text-font">
                        <ul>
                            <li style = {{ paddingTop : "20px" }}><a className="personas-a" href = "#Context">Context</a></li>
                            <li style = {{ paddingTop : "20px" }}><a className="personas-a" href = "#Sketch & Description">Sketch & Description</a></li>
                            <li style = {{ paddingTop : "20px" }}><a className="personas-a" href = "#Observations">Observations</a></li>
                            <li style = {{ paddingTop : "20px" }}><a className="personas-a" href = "#Interview-Questions">Interview Questions</a></li>
                            <li style = {{ paddingTop : "20px" }}><a className="personas-a" href = "#Interview-Summary">Interview Summary</a></li>
                            <li style = {{ paddingTop : "20px" }}><a className="personas-a" href = "#Personas">Personas</a></li>
                            <li style = {{ paddingTop : "20px" }}><a className="personas-a" href = "#Storyboard">Storyboard</a></li>
                        </ul>
                    </div>
                </div>
    
                <div className = "personas-flex-container-col-section">
                    <div id="Context" style={{paddingBottom: "30px"}}>
                        <h1 className = "personas-section-title-font" style = {{ paddingTop : "50px" }}>Context</h1>
                        <img src = "images/personas/bikeRack.png" alt = "Bike Rack On the Bus" width="850px" height="auto" style = {{ paddingTop : "50px" }}/>
                        <p className = "personas-section-text-font" style = {{ paddingTop : "40px" }}>The bike rack on the bus is a common interface in public view. It is a device to which bicycles can be securely attached for parking purposes when passengers taking the bus. In this project, we are going to discuss the user experiences of this interface. Some observations about interactions between this interface and real users can be found <b><a href="#Observations">here</a></b>. The interview questions and interview summary regarding users' experiences with this interface can be found <b><a href = "#Interview-Questions">here</a></b>.</p>
                    </div>

                    <div id="Sketch & Description" style={{paddingBottom: "30px"}}>
                        <h1 className = "personas-section-title-font" style = {{ paddingTop : "50px" }}>Sketch & Description</h1>
                        <img src = "images/personas/Sketch.jpg" alt = "Sketch of the Bike Rack" width="850px" height="auto" style = {{ paddingTop : "50px" }}/>
                        <p className = "personas-section-text-font" style = {{ paddingTop : "40px" }}>
                            This interface is used to provide a place for the bus passengers to place their bike safely and stably.
                            When a passenger wants to use the bike rack on the bus, he/she needs to first squeeze the release handle and pull it to low, just as shown in the left image above. One of the key interactive components here is the squeeze handle, passengers can only pull the bike rack down when they squeeze the handle.
                            Then passenger can place the bike’s wheels in the front truck. Once the bike is mounted, he/she needs to raise the support arm up and over the front tire to make sure the arm is securely placed at the top close to the bike, just as shown in the right image above. Another key interactive component here is the raise support arm, which is used to secure the bike on the rack.
                        </p>
                    </div>

                    <div id="Observations" style={{paddingBottom: "30px"}}>
                        <h1 className = "personas-section-title-font" style = {{ paddingTop : "50px" }}>Observations</h1>
                        <ul className = "personas-section-text-font" style = {{ paddingTop : "30px" }}>
                            <li style = {{ paddingTop : "10px" }}>Some of the passengers with bike can place and fasten the bike in less than 1 minute.</li>
                            <li style = {{ paddingTop : "10px" }}>Some of the passengers with bike foget to place the support arm on the bike's front wheel.</li>
                            <li style = {{ paddingTop : "10px" }}>A few of the passgengers with bike don't even know how to pull down the bike rack, they have to ask help from the bus driver.</li>
                        </ul>
                    </div>


                    <div id="Interview-Questions" style={{paddingBottom: "30px"}}>
                        <h1 className = "personas-section-title-font" style = {{ paddingTop : "50px" }}>Interview Questions</h1>
                        <p className = "personas-section-text-font" style = {{ paddingTop : "30px" }}>Q1: Have you ever taken the bus with your bike?</p>
                        <p className = "personas-section-text-font" style = {{ paddingTop : "30px" }}><i>If the answer for the first question is <b>yes</b>, we follow the steps below:</i></p>
                        <p className = "personas-section-text-font" style = {{ paddingTop : "15px" }}>Q2: Where did you place your bike when you took the bus?</p>
                        <p className = "personas-section-text-font" style = {{ paddingTop : "15px" }}>Q3: What is your first reaction to the bike rack?</p>
                        <p className = "personas-section-text-font" style = {{ paddingTop : "15px" }}>Q4: Have you ever met with any challenges when use the bike rack on the bus?</p>
                        <p className = "personas-section-text-font" style = {{ paddingTop : "15px" }}>Q5: Do you feel this interface is easy to use or not?</p>

                        <p className = "personas-section-text-font" style = {{ paddingTop : "30px" }}><i>If the answer for the first question is <b>no</b>, we follow the steps below:</i></p>
                        <p className = "personas-section-text-font" style = {{ paddingTop : "15px" }}>Q2: What is your first reaction to this interface (showing the sketch to the interviewee)?</p>
                        <p className = "personas-section-text-font" style = {{ paddingTop : "15px" }}>Q3: Will you use this interface if you need to take the bus with your bike in the future?</p>
                        
                    </div>


                    <div id="Interview-Summary" style={{paddingBottom: "30px"}}>
                        <h1 className = "personas-section-title-font" style = {{ paddingTop : "50px" }}>Interview Summary</h1>
                        <p className = "personas-section-text-font" style = {{ paddingTop : "30px" }}><i>For users who have taken the bus with a bike:</i></p>
                        <ul className = "personas-section-text-font">
                            <li style = {{ paddingTop : "30px" }}>They put the bike on the bike rack at most times.</li>
                            <li style = {{ paddingTop : "10px" }}>Sometimes, there is no room to place their own bikes on the bike rack.</li>
                            <li style = {{ paddingTop : "10px" }}>Most of them have no idea about how to use the bike rack at the first time, but after the first time, they find this interface is easy to use.</li>
                        </ul>

                        <p className = "personas-section-text-font" style = {{ paddingTop : "30px" }}><i>For users who have <b>never</b> taken the bus with a bike:</i></p>
                        <ul className = "personas-section-text-font">
                            <li style = {{ paddingTop : "30px"}}>For some of users, the imagination of being embarrassed for not knowing how to use the bike rack, or their bike get crushed under bus tires, doesn't allow them to use this interface.</li>
                            <li style = {{ paddingTop : "15px" }}>They think this interface is easy to use with the sketch and introduction and they will try to use it in the future.</li>
                        </ul>
                    </div>

                    <div id="Personas" style={{paddingBottom: "30px"}}>
                        <h1 className = "personas-section-title-font" style = {{ paddingTop : "50px" }}>Personas</h1>
                        <img src = "images/personas/Empathy Map1.png" alt = "Empathy Map 1" width="850px" height="auto" style = {{ paddingTop : "50px" }}/>
                        <p className = "personas-section-text-font" style = {{ paddingTop : "40px" }}>The interface problem that Jason faces is that he doesn't know how to use this interface when using it for the first time. Jason represents a type of users who have no experience to use the bike rack on the bus and have no idea how to use it. Like this part of the users, Jason is nervous for not knowing how to use this interface and he is also embarrassed when get stuck.</p>

                        <img src = "images/personas/Empathy Map2.png" alt = "Empathy Map 1" width="850px" height="auto" style = {{ paddingTop : "50px" }}/>
                        <p className = "personas-section-text-font" style = {{ paddingTop : "40px"}}>The interface problem that Kevin faces is that the bike rack on the bus might not have room for his own bike. Kevin represnets a type of users who use this interface often but still face some potential problem from this interface. They can place their bikes on the rack in a very short time, but sometimes they will worry about the coming bus may have no room for their own bikes.</p>
                    </div>

                    <div id="Storyboard">
                        <h1 className = "personas-section-title-font" style = {{ paddingTop : "50px" }}>Storyboard</h1>
                        <img src = "images/personas/storyboard.png" alt = "Storyboard" width="850px" height="auto" style = {{ paddingTop : "50px"}}/>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Personas;