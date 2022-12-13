import React from "react";
import '../styles/development.css'

const Development = () => {

    return (
        <div className ="development-container">
            <div className = "development-navigation-bar">
                <div>
                    <p><a className = "development-a" href="/">Smart Fox</a></p>
                </div>

                <div className = "development-about">
                    <p><a className = "development-a" href="/">Home</a></p>
                    <p><a className = "development-a" href="/works">Works</a></p>
                </div>
            </div>

            <div className = "development-flex-container-row">
                <div className = "development-flex-container-col-meta">
                    <h1 className = "development-meta-title-font"><a className="development-a" href="/development">React Development</a></h1>
                    <div className = "development-meta-text-font">
                        <ul>
                            <li style={{paddingTop: "20px"}}><a className = "development-a" href = "#Context">Context</a></li>
                            <li style={{paddingTop: "20px"}}><a className = "development-a" href = "#Introduction">Introduction</a></li>
                            <li style={{paddingTop: "20px"}}><a className = "development-a" href = "#Development">Development</a></li>
                        </ul>
                    </div>
                </div>

                <div className = "development-flex-container-col-section">
                    <div style={{paddingBottom: "30px"}}>
                        <h1 id = "Context" className = "development-section-title-font" style = {{ paddingTop : "50px" }}>Context</h1>

                        <figure style={{paddingTop: "50px"}}>
                            <img src = "images/development/react.jpeg" alt = "react" width = "850px" height = "auto" />
                            <figcaption style= {{paddingTop: "10px", width: "850px", textAlign: "center"}}><i>Figure1: React, a javascript library</i></figcaption>
                        </figure>

                        <p className = "development-section-text-font" style = {{ paddingTop : "40px" }}>
                            React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies. React can be used as a base in the development of single-page, mobile, or server-rendered applications with frameworks like Next.js. 
                        </p>
                    </div>

                    <div style={{paddingBottom: "30px"}}>
                        <h1 id = "Introduction" className = "development-section-title-font" style = {{ paddingTop : "50px" }}>Introduction</h1>
                        <p className = "development-section-text-font" style = {{ paddingTop : "30px" }}>
                            In this project, we are asked to develop an interactive interface, use interface components, and tie the components to an internal data state.
                            To Get even more comfortable with React, we need to create a list-based interface! Basically, an interface for users to select items out of a list, which then aggregates them.
                        </p>

                        <p className = "development-section-text-font" style = {{ paddingTop : "30px" }}>
                            Features to Include in the interface: 
                        </p>
                        
                        <div className = "development-section-text-font">
                            <ul>
                                <li>At least <b>2 filtering categories</b></li>
                                <li style={{paddingTop: "10px"}}>At least <b>1 sorting feature</b></li>
                                <li style={{paddingTop: "10px"}}><b>An aggregator section</b></li>
                                <li style={{paddingTop: "10px"}}>At least <b>12 item cards</b>, each displaying: </li>
                                    <ul>
                                        <li>Item image</li>
                                        <li style={{paddingTop: "10px"}}>Categories that filter uses</li>
                                        <li style={{paddingTop: "10px"}}>Field(s) that sort uses</li>
                                        <li style={{paddingTop: "10px"}}>Property that are aggregating</li>
                                        <li style={{paddingTop: "10px"}}>A button that adds to/removes from the aggregator</li>
                                    </ul>
                            </ul>
                        </div>
                    </div>

                    <div style={{paddingBottom: "30px"}}>
                        <h1 id = "Development" className = "development-section-title-font" style = {{ paddingTop : "50px" }}>Development</h1>

                        <figure style={{paddingTop: "50px"}}>
                            <img src = "images/development/page.png" alt = "react app page" width = "850px" height = "auto" />
                            <figcaption style= {{paddingTop: "10px", width: "850px", textAlign: "center"}}><i>Figure2: Screenshot of the React app</i></figcaption>
                        </figure>

                        <p className = "development-section-text-font" style = {{ paddingTop : "40px" }}>
                            I developed an application that can be used by grocery store. Users can add or remove products based on their requirements. 
                            Users can use the filters on the left to choose their preferred product type and delivery option. They can also sort the products by price and rating.
                            You can find the deployed app from <b><a href = "https://smartfox998.github.io/Development/" target = "_blank" rel="noreferrer">here</a></b>, feel free to play around with it.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Development;