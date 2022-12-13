import React from "react";
import { useNavigate } from "react-router-dom";
import '../styles/iterative.css'

const IterativeDesign = () => {
    const navigate = useNavigate();

    return (
        <div className ="iterative-container">
            <div className = "iterative-navigation-bar">
                <div>
                    <p><a className = "iterative-a" href="/">Smart Fox</a></p>
                </div>

                <div className = "iterative-about">
                    <p><a className = "iterative-a" href="/">Home</a></p>
                    <button className="text-button" onClick={() => navigate("/works")}>Works</button>
                </div>
            </div>

            <div className = "iterative-flex-container-row">
                <div className = "iterative-flex-container-col-meta">
                    <button className="text-button" onClick={() => window.scrollTo(0, 0)}>Iterative Design</button>
                    <div className = "iterative-meta-text-font">
                        <ul>
                            <li style={{paddingTop: "20px"}}><a className = "iterative-a" href = "#Introduction">Introduction</a></li>
                            <li style={{paddingTop: "20px"}}><a className = "iterative-a" href = "#Initial-Sketches">Initial Sketches</a></li>
                            <li style={{paddingTop: "20px"}}><a className = "iterative-a" href = "#Combined-Wireframe">Combined Wireframe</a></li>
                            <li style={{paddingTop: "20px"}}><a className = "iterative-a" href = "#Mockup">Interactive Hi-Fi Mockup</a></li>
                            <li style={{paddingTop: "20px"}}><a className = "iterative-a" href = "#User-Test">User Testing</a></li>
                            <li style={{paddingTop: "20px"}}><a className = "iterative-a" href = "#Analysis">Analysis of Results</a></li>
                        </ul>
                    </div>
                </div>

                <div className = "iterative-flex-container-col-section">
                    <div style={{paddingBottom: "30px"}}>
                        <h1 id = "Introduction" className = "iterative-section-title-font" style = {{ paddingTop : "50px" }}>Introduction</h1>

                        <figure style={{paddingTop: "50px"}}>
                            <img src = "images/iterative/company.png" alt = "company" width = "850px" height = "auto" />
                            <figcaption style= {{paddingTop: "10px", width: "850px", textAlign: "center"}}><i>Figure1: Indonesia startup bananas</i></figcaption>
                        </figure>

                        <p className = "iterative-section-text-font" style = {{ paddingTop : "40px" }}>Bananas is a grocery delivery startup based in Jakarta, Indonesia where you can order groceries and get it delivered in minutes. 
                            Its aim is to deliver groceries directly to user’s home within minutes and at supermarket prices. You can find more details from its <b><a href = "https://www.bananas.id/" target = "_blank" rel="noreferrer">website</a></b>.
                            In this project, our group will go through the full process of mocking up a solution to the Bananas's concept and design a mobile interactive interface for it.
                        </p>
                    </div>

     

                    <div style={{paddingBottom: "30px"}}>
                        <h1 id = "Initial-Sketches" className = "iterative-section-title-font" style = {{ paddingTop : "50px" }}>Initial Sketches</h1>
                        <p className = "iterative-section-text-font" style = {{ paddingTop : "30px" }}>
                            At the first stage, we brainstormed 4 different possible designs for Bananas's mobile app which are shown below. 
                            Each team member designed the initial sketch by himself/herself, in order to reflect as wide a variety of screens and layouts as possible to get the ideas flowing. 
                        </p>

                        <figure style={{paddingTop: "50px"}}>
                            <img src = "images/iterative/initial-sketch-1.png" alt = "Initial sketch by team member 1" width = "850px" height = "auto" />
                            <figcaption style= {{paddingTop: "10px", width: "850px", textAlign: "center"}}><i>Figure2: Initial sketch by team member 1</i></figcaption>
                        </figure>

                        <figure style={{paddingTop: "50px"}}>
                            <img src = "images/iterative/initial-sketch-2.png" alt = "Initial sketch by team member 2" width = "850px" height = "auto" />
                            <figcaption style= {{paddingTop: "10px", width: "850px", textAlign: "center"}}><i>Figure3: Initial sketch by team member 2</i></figcaption>
                        </figure>

                        <figure style={{paddingTop: "50px"}}>
                            <img src = "images/iterative/initial-sketch-3.png" alt = "Initial sketch by team member 3" width = "850px" height = "auto" />
                            <figcaption style= {{paddingTop: "10px", width: "850px", textAlign: "center"}}><i>Figure4: Initial sketch by team member 3</i></figcaption>
                        </figure>

                        <figure style={{paddingTop: "50px"}}>
                            <img src = "images/iterative/initial-sketch-4.png" alt = "Initial sketch by team member 4" width = "850px" height = "auto" />
                            <figcaption style= {{paddingTop: "10px", width: "850px", textAlign: "center"}}><i>Figure5: Initial sketch by team member 4</i></figcaption>
                        </figure>
                    </div>

             

                    <div style={{paddingBottom: "30px"}}>
                        <h1 id = "Combined-Wireframe" className = "iterative-section-title-font" style = {{ paddingTop : "50px" }}>Combined Wireframe</h1>
                        <p className = "iterative-section-text-font" style = {{ paddingTop : "30px" }}>
                            After we have finished initial sketches, we combined our ideas and made one set of wireframes to show how we’ve incorporated that feedback into the next iteration of our design. 
                            The wireframe is shown below.
                        </p>

                        <figure style={{paddingTop: "50px"}}>
                            <img src = "images/iterative/wireframe.png" alt = "Wireframe for the mobile app" width = "850px" height = "auto" />
                            <figcaption style= {{paddingTop: "10px", width: "850px", textAlign: "center"}}><i>Figure6: Wireframe for the mobile app</i></figcaption>
                        </figure>
                    </div>

                 

                    <div style={{paddingBottom: "30px"}}>
                        <h1 id = "Mockup" className = "iterative-section-title-font" style = {{ paddingTop : "50px" }}>Interactive Hi-Fi Mockup</h1>
                        <p className = "iterative-section-text-font" style = {{ paddingTop : "30px" }}>
                            At this stage, we made an interactive high-fidelity (hi-fi) prototype based on the wireframe we created. 
                            After we presented our mockup during the studio time, we received a round of critiques shown as below:
                        </p>

                        <ul className = "iterative-section-text-font">
                            <li>Navigation bar should be accessible in the checkout page.</li>
                            <li style={{paddingTop: "10px"}}>Some buttons are too small to click on.</li>
                            <li style={{paddingTop: "10px"}}>In the order history page, the reorder button is too large, which is very strange.</li>
                            <li style={{paddingTop: "10px"}}>In the account setting page, title looks clickable, which shouldn't be.</li>
                            <li style={{paddingTop: "10px"}}>In the checkout page, there is no way to return back to the home page, should add a return button.</li>
                        </ul>

                        <p className = "iterative-section-text-font" style = {{ paddingTop : "30px" }}>
                            After critique, we made a final iteration to our high-fidelity (hi-fi) prototype incorporating the feedback, which can be found <b><a href = "https://www.figma.com/proto/VtwY6Bo4ZhMcSTni5zSA31/Banana-mobile-app?node-id=1%3A2&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A2" target = "_blank" rel="noreferrer">here</a></b>.
                            And there are also some screenshots from our final prototype as shown below.
                        </p>

                        <figure style={{paddingTop: "50px"}}>
                            <img src = "images/iterative/screenshot.png" alt = "Screenshots from hi-fi prototype" width = "850px" height = "auto" />
                            <figcaption style= {{paddingTop: "10px", width: "850px", textAlign: "center"}}><i>Figure7: Screenshots from hi-fi prototype</i></figcaption>
                        </figure>
                    </div>

                

                    <div style={{paddingBottom: "30px"}}>
                        <h1 id = "User-Test" className = "iterative-section-title-font" style = {{ paddingTop : "50px" }}>User Testing</h1>
                        <p className = "iterative-section-text-font" style = {{ paddingTop : "30px" }}>
                            At this stage, we conducted our own usability test through a remote user testing service (<b><a href="https://www.usertesting.com/" target = "_blank" rel="noreferrer">UserTesting.com</a></b>), using our final interactive Hi-Fi prototype. 
                            We provided testing instructions, some specific tasks as well as post-test questions to collect information from <b>three users</b>.
                        </p>
                        <p className = "iterative-section-text-font" style = {{ paddingTop : "30px" }}>
                            The <b>testing instructions</b> are shown below:
                        </p>
                        <p className = "iterative-section-text-font">
                            <i>
                                Bananas is an App for grocery delivery. Imagine you are looking to buy some groceries using the Bananas mobile app. Note that you will be interacting with a mockup made through prototyping software, rather than an actual mobile app. Not all buttons are clickable and input fields are not interactive. However, everything you need to complete the specified tasks (i.e. the main flow to buy grocery and checkout) has been built and can be reached by navigating through the app. Please ignore if the grocery product information is incorrect or not matched. Please think out loud as you perform the specified tasks.
                            </i>
                        </p>
                        <p className = "iterative-section-text-font" style = {{ paddingTop : "30px" }}>
                            The <b>specific tasks</b> we want users to complete on our interactive prototype are shown below:
                        </p>
                        <ol className = "iterative-section-text-font">
                            <li>
                                <i>You want to buy grocery from a store, choose a store you like (since this is prototype, different button will lead to the same store). [Success: Yes, No] [5-point rating scale: Very difficult to Very easy]</i>
                            </li>
                            <li style={{paddingTop: "10px"}}>
                                <i>Browse product categories and available products. [Success: Yes, No] [5-point rating scale: Very difficult to Very easy]</i>
                            </li>
                            <li style={{paddingTop: "10px"}}>
                                <i>View detail of a product (since this is prototype, product details are the same). [Success: Yes, No] [5-point rating scale: Very difficult to Very easy]</i>
                            </li>
                            <li style={{paddingTop: "10px"}}>
                                <i>Add product to shopping cart. [Success: Yes, No] [5-point rating scale: Very difficult to Very easy]</i>
                            </li>
                            <li style={{paddingTop: "10px"}}>
                                <i>After you finish adding products, you are ready to check out. Click the shopping cart button at the bottom to see what is in your cart. [Success: Yes, No] [5-point rating scale: Very difficult to Very easy]</i>
                            </li>
                            <li style={{paddingTop: "10px"}}>
                                <i>Proceed to the checkout page and view the order summary. [Success: Yes, No] [5-point rating scale: Very difficult to Very easy]</i>
                            </li>
                            <li style={{paddingTop: "10px"}}>
                                <i>Place the order, reorder or return to the order history to view all your orders. [Success: Yes, No] [5-point rating scale: Very difficult to Very easy]</i>
                            </li>
                            <li style={{paddingTop: "10px"}}>
                                <i>You want to view your profile, so click the user button at the bottom to view all options. [Success: Yes, No] [5-point rating scale: Very difficult to Very easy]</i>
                            </li>
                        </ol>

                        <p className = "iterative-section-text-font" style = {{ paddingTop : "30px" }}>
                            Three <b>user testing videos</b> with the users' feedback, as well as answers to specific questions and prompts are shown below:
                        </p>

                        <video style={{paddingTop: "50px"}} width = "850px" height = "auto" controls>
                            <source src="videos/UserTesting-1.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>

                        <video style={{paddingTop: "50px"}} width = "850px" height = "auto" controls>
                            <source src="videos/UserTesting-2.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>

                        <video style={{paddingTop: "50px"}} width = "850px" height = "auto" controls>
                            <source src="videos/UserTesting-3.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>

                        <p className = "iterative-section-text-font" style = {{ paddingTop : "40px" }}>
                            The <b>post-test questions</b> are shown below:
                        </p>
                        <ol className = "iterative-section-text-font">
                            <li>
                                <i>How easy or difficult was it for you to complete the specified tasks?</i>
                            </li>
                            <li style={{paddingTop: "10px"}}>
                                <i>Are there any parts of the app make you confused? If so, which parts and why?</i>
                            </li>
                            <li style={{paddingTop: "10px"}}>
                                <i>How do you think the learnability of this app?</i>
                            </li>
                            <li style={{paddingTop: "10px"}}>
                                <i>Please feel free to share any other feedback you have regarding the app.</i>
                            </li>
                        </ol>
                    </div>

              

                    <div style={{paddingBottom: "30px"}}>
                        <h1 id = "Analysis" className = "iterative-section-title-font" style = {{ paddingTop : "50px" }}>Analysis of Results</h1>
                        <p className = "iterative-section-text-font" style = {{ paddingTop : "30px" }}>
                            We have 8 tasks in total, which are listed below with feedbacks from 3 different users:
                        </p>
                        <ol className = "iterative-section-text-font">
                            <li>You want to buy grocery from a store, choose a store you like (since this is prototype, different button will lead to the same store).</li>
                            <p><b>Feedback: Users find it very easy to choose a store from the homepage. In line with our expectations.</b></p>

                            <li>Browse product categories and available products.</li>
                            <p><b>Feedback: Users find it very easy to browse categories and products. In line with our expectations.</b></p>

                            <li>View detail of a product (since this is prototype, product details are the same).</li>
                            <p><b>Feedback: Users find it very easy to view detail of a product. In line with our expectations. However, some users find the product description is too long.</b></p>

                            <li>Add product to shopping cart.</li>
                            <p><b>Feedback: Users find it very easy to add product to shopping cart. In line with our expectations. While, some users suggest switch “Confirm” button to “Add” button.</b></p>

                            <li>After you finish adding products, you are ready to check out. Click the shopping cart button at the bottom to see what is in your cart.</li>
                            <p><b>Feedback: Users find it very easy to view items in the shopping cart. In line with our expectations. Some users suggest to add the total number of items on the shopping cart button.</b></p>

                            <li>Proceed to the checkout page and view the order summary.</li>
                            <p><b>Feedback: Users find it very easy to view order summary. In line with our expectations. Some users suggest to add tip options in percentage, and add a “Order Summary” title at the top to notify user that she/he is viewing the summary.</b></p>

                            <li>Place the order, reorder or return to the order history to view all your orders.</li>
                            <p><b>Feedback: Users find it very easy to place the order, reorder and view the order history. In line with our expectations.</b></p>

                            <li>You want to view your profile, so click the user button at the bottom to view all options.</li>
                            <p><b>Feedback: Users find it very easy to view the profile. In line with our expectations.</b></p>
                        </ol>

                        <p className = "iterative-section-text-font" style = {{ paddingTop : "30px" }}>
                            Overall, users find that all tasks are very easy to complete, and they completed them successfully without making mistakes. In terms of learnability, all users find it very simple to learn and use.  
                        </p>

                        <p className = "iterative-section-text-font" style = {{ paddingTop : "30px" }}>
                            From the results and feedbacks, there are several potential interface changes we would make:
                        </p>

                        <ol className = "iterative-section-text-font">
                            <li>Lower the brightness of the yellow color.</li>
                            <li style={{paddingTop: "10px"}}>Limit the length of product description in the product detail page.</li>
                            <li style={{paddingTop: "10px"}}>Change the “Confirm” button to “Add” button in the product detail page.</li>
                            <li style={{paddingTop: "10px"}}>Add the total number of items on the shopping cart button.</li>
                            <li style={{paddingTop: "10px"}}>In the order summary page, add tip options in percentage, and add a “Order Summary” title at the top to notify user that she/he is viewing the summary.</li>
                            <li style={{paddingTop: "10px"}}>Add a profile label to the user profile page.</li>
                            <li style={{paddingTop: "10px"}}>Make three buttons at the bottom are always available no matter which screen user is viewing.</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IterativeDesign;