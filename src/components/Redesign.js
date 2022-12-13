import React from "react";
import { useNavigate } from "react-router-dom";
import '../styles/redesign.css'

const Redesign = () => {
    const navigate = useNavigate();

    return (
        <div className="redesign-container">
            <div className = "redesign-navigation-bar">
                <div>
                    <p><a className="redesign-a" href="/">Smart Fox</a></p>
                </div>

                <div className = "redesign-about">
                    <p><a className="redesign-a" href="/">Home</a></p>
                    <button className="text-button" onClick={() => navigate("/works")}>Works</button>
                </div>
            </div>

            <div className = "redesign-flex-container-row">
                <div className = "redesign-flex-container-col-meta">
                    <button className="text-button" onClick={() => window.scrollTo(0, 0)}>Responsive Redesign</button>
                    <div className = "redesign-meta-text-font">
                        <ul>
                            <li><a className="redesign-a" href = "#context">Context</a></li>
                            <li><a className="redesign-a" href = "#usability-problems">Analyze and identify flaws</a></li>
                            <li><a className="redesign-a" href = "#low-fidelity-wireframes">Low-fidelity wireframes</a></li>
                            <li><a className="redesign-a" href = "#design-guide">Visual design style guide</a></li>
                            <li><a className="redesign-a" href = "#high-fidelity-prototypes">High-fidelity prototypes</a></li>
                            <li><a className="redesign-a" href = "#responsive-redesign">Responsive website</a></li>
                        </ul>
                    </div>
                </div>
        
                <div className = "redesign-flex-container-col-section">
                    <div style={{paddingBottom: "30px"}}>
                        <h1 id = "context" className = "redesign-section-title-font" style = {{ paddingTop : "50px" }}>Context</h1>
                        <p className = "redesign-section-text-font" style = {{ paddingTop : "30px" }}>
                            The goal of this project is to practice the workflow of redesigning a simple website.
                            Start from analyzing and identifying flaws in an existing interface, I create low-fidelity and high-fidelity prototypes for various screen sizes, and then build a responsive website based on those prototypes.
                            The webpage that I choose is the homepage of a kindergarten in north providence school district. You can visit this webpage by clicking <b><a href = "http://nprovschools.org/kindergarten" target = "_blank" rel="noreferrer">here</a></b>. There are a few screenshots for this webpage shown below.
                        </p>
                        
                        <figure style = {{paddingTop: "50px"}}>
                            <img src = "images/redesign/original-1.png" alt = "first part of the webpage on desktop" width = "850px" height = "auto" style = {{ border : "2px solid #000000" }} />
                            <figcaption style= {{paddingTop: "10px", width: "850px", textAlign: "center"}}><i>Figure1: The first part of the webpage on desktop</i></figcaption>
                        </figure>

                        <figure style = {{paddingTop: "50px"}}>
                            <img src = "images/redesign/original-2.png" alt = "second part of the webpage on desktop" width = "850px" height="auto" style = {{ border : "2px solid #000000" }} />
                            <figcaption style= {{paddingTop: "10px", width: "850px", textAlign: "center"}}><i>Figure2: The second part of the webpage on desktop</i></figcaption>
                        </figure>

                        <figure style = {{paddingTop: "50px"}}>
                            <center><img src = "images/redesign/mobile.jpeg" alt = "webpage on the mobile phone" width = "400px" height="auto" style = {{ border : "2px solid #000000" }} /></center>
                            <figcaption style= {{paddingTop: "10px", width: "850px", textAlign: "center"}}><i>Figure3: The screenshot of the webpage on mobile phone</i></figcaption>
                        </figure>

                        <p className = "redesign-section-text-font" style = {{ paddingTop : "40px" }}>
                            There are many reasons why I want to redesign this webpage. First of all, the navigation bar on this webpage is so confusing, there are two different font styles in the navigation bar <i>(Figure1)</i>. Moreover, the link font color is not very clear with the white background <i>(Figure2)</i>. Most importantly, this is not a responsive website <i>(Figure3)</i>, and the layout is not that satisfactory.
                        </p>

                    </div>

                    <div style={{paddingBottom: "30px"}}>
                        <h1 id = "usability-problems" className = "redesign-section-title-font" style = {{paddingTop: "50px"}}>Identify Usability Problems</h1>
                        <ul className = "redesign-section-text-font" style = {{ paddingTop : "30px" }}>
                            <li>Usability: For frequent users, the typical tasks can be done quickly.</li>
                            <li>Learnability: For new users, this website is not very easy to learn, they need to spend some time to get familiar with the layout of the website. They might need extra help if they want to find some information of the kindergarten, e.g., how to login with different accounts.</li>
                            <li>Memorability: For casual users, some functionalities of this website are not very easy to recall. For example, it’s very hard to remember where to find the important news and important files of the kindergarten.</li>
                            <li>
                                Conceptual Model: This webpage has poor affordances that could mislead users to the wrong actions. For example, in the navigation bar, thre are four choices: EMAIL, SKYWARD, FACILITY DUDE, FRONTLINE. They are actually four different ways to login to the kindergarten's system, and should not list as the same level with Administration, Families, etc.
                                It is more reasonable to list them under a choice called Login.
                            </li>
                        </ul>
                    </div>

                    <div style={{paddingBottom: "30px"}}>
                        <h1 id = "accessibility-problems" className = "redesign-section-title-font" style = {{paddingTop: "50px"}}>Identify Accessibility Problems</h1>
                        <figure style = {{paddingTop: "50px"}}>
                            <img src = "images/redesign/problems.png" alt = "accessibility problems of the webpage" width = "850px" height="auto" style = {{ border : "2px solid #000000" }} />
                            <figcaption style= {{paddingTop: "10px", width: "850px", textAlign: "center"}}><i>Figure4: Accessibility problems of the webpage detected by using <a href = "https://wave.webaim.org/" target = "_blank" rel="noreferrer">WAVE</a></i></figcaption>
                        </figure>
                        <p className = "redesign-section-text-font" style = {{ paddingTop : "40px" }}>
                            Yes, I agree with most of the problems dected by <i><b><a href = "https://wave.webaim.org/" target = "_blank" rel="noreferrer">WAVE</a></b></i>. There are 4 images without alternative text, 2 empty headings, 6 empty buttons and one empty link. Moreover, there are 81 texts with very low contrast in total! Overall, this webpage has a poor design, much more things could be done to improve users' experience.
                        </p>
                    </div>

                    <div style={{paddingBottom: "30px"}}>
                        <h1 id = "low-fidelity-wireframes" className = "redesign-section-title-font" style = {{paddingTop: "50px"}}>Low-Fidelity Wireframes</h1>
                        <figure style = {{paddingTop: "50px"}}>
                            <img src = "images/redesign/LowFi-desktop.png" alt = "Low-fidelity wireframe for desktop" width = "850px" height="auto" style = {{ border : "2px solid #000000" }} />
                            <figcaption style= {{paddingTop: "10px", width: "850px", textAlign: "center"}}><i>Figure5: Low-Fidelity Wireframe for desktop</i></figcaption>
                        </figure>
                        <p className = "redesign-section-text-font" style = {{ paddingTop : "40px" }}>
                            In this low-fidelity wireframe for desktop, I use a <b><i>login</i></b> button on the top right to store all the different ways to login. In this way, users could find the login entry portal easier. I also redesign the navigation bar for this webpage, removing some redundant choices to make it more clean and clear. I also redesign the layout of this webpage, users now could find improtant news and important files from the <b><i>Important News</i></b> section at the bottom.
                        </p>

                        <figure style = {{paddingTop: "50px"}}>
                            <center><img src = "images/redesign/LowFi-pad.png" alt = "Low-fidelity wireframe for tablet" width = "600px" height="auto" style = {{ border : "2px solid #000000" }} /></center>
                            <figcaption style= {{paddingTop: "10px", width: "850px", textAlign: "center"}}><i>Figure6: Low-Fidelity Wireframe for tablet</i></figcaption>
                        </figure>
                        <p className = "redesign-section-text-font" style = {{ paddingTop : "40px" }}>
                            In this low-fidelity wireframe for tablet, I use a menu button on the top left to replace the navigation bar in the desktop wireframe. And the layout and the font size of each section also change according to the screen size.
                        </p>

                        <figure style = {{paddingTop: "50px"}}>
                            <center><img src = "images/redesign/LowFi-phone.png" alt = "Low-fidelity wireframe for mobile phone" width = "400px" height="auto" style = {{ border : "2px solid #000000" }} /></center>
                            <figcaption style= {{paddingTop: "10px", width: "850px", textAlign: "center"}}><i>Figure7: Low-Fidelity Wireframe for mobile phone</i></figcaption>
                        </figure>

                        <p className = "redesign-section-text-font" style = {{ paddingTop : "40px" }}>
                            The low-fidelity wireframe for mobile phone is very similar to the one for tablet, the only differnce is the font size which will become smaller because of smaller screen size.
                        </p>
                    </div>

                    <div style={{paddingBottom: "30px"}}>
                        <h1 id = "design-guide" className = "redesign-section-title-font" style = {{paddingTop: "50px"}}>Visual Design Style Guide</h1>
                        <figure style = {{paddingTop: "50px"}}>
                            <img src = "images/redesign/style-guide.png" alt = "Visual Design Style Guide" width = "850px" height="auto" style = {{ border : "2px solid #000000" }} />
                            <figcaption style= {{paddingTop: "10px", width: "850px", textAlign: "center"}}><i>Figure8: Visual Design Style Guide</i></figcaption>
                        </figure>
                    </div>

                    <div style={{paddingBottom: "30px"}}>
                        <h1 id = "high-fidelity-prototypes" className = "redesign-section-title-font" style = {{paddingTop: "50px"}}>High-Fidelity Prototypes</h1>
                        <p className = "redesign-section-text-font" style = {{ paddingTop : "30px" }} >
                            The high fidelity prototypes for different screen size are shown below. Overall, there are five parts in each prototype: header, a image of children, important news section, kindergarten registration section and footer.
                            The whole webpage uses <b><i>flexbox layout</i></b>, and these five sections are in <b><i>column flex direction</i></b>.
                        </p>
                        <figure style = {{paddingTop: "50px"}}>
                            <img src = "images/redesign/HiFi-desktop.png" alt = "High-Fidelity for desktop" width = "850px" height="auto" style = {{ border : "2px solid #000000" }} />
                            <figcaption style= {{paddingTop: "10px", width: "850px", textAlign: "center"}}><i>Figure9: High-fidelity prototype for desktop</i></figcaption>
                        </figure>
                        <p className = "redesign-section-text-font" style = {{ paddingTop : "40px" }}>
                            The header section has three parts. The first part is a white rectangle on the top with text <i>KINDERGARTEN</i> and some icons. All the social account icons are clickable.
                            The second part is a blue rectangle under the white one with the navigation bar on it. Each choice on the navigation bar is clickable and will show a list when the mouse is hover on it.
                            These two rectangles also use <b><i>flexbox layout</i></b> in <b><i>column flex direction</i></b>. The third part is the logo of the kindergarten, which should be placed at the top left of the webpage, therefore it should use <b><i>absolute</i></b> position setting.
                        </p>
                        <p className = "redesign-section-text-font" style = {{ paddingTop : "30px" }}>
                            The rest three sections (children image, important news, kindergarten registration) are easy to implement, just create some flexbox in <b><i>column</i></b> direction.
                        </p>
                        <p className = "redesign-section-text-font" style = {{ paddingTop : "30px" }}>
                            The footer section has two parts: <i>Contact Information</i> and <i>Site Map</i>. These two parts should use <b><i>flexbox layout</i></b> in <b><i>row flex direction</i></b>.
                        </p>

                        <figure style = {{paddingTop: "50px"}}>
                            <center><img src = "images/redesign/HiFi-pad.png" alt = "High-Fidelity for tablet" width = "600px" height="auto" style = {{ border : "2px solid #000000" }} /></center>
                            <figcaption style= {{paddingTop: "10px", width: "850px", textAlign: "center"}}><i>Figure10: High-fidelity prototype for tablet</i></figcaption>
                        </figure>

                        <p className = "redesign-section-text-font" style = {{ paddingTop : "40px" }}>
                            When users visit this redesigned webpage on a tablet, the head of the webpage will change. There are three parts on the head: the menu icon, the kindergarten's logo and the login icon.
                            These three parts should use <b><i>flexbox layout</i></b> in <b><i>row flex direction</i></b> with <b><i>space-between</i></b> to distribute space between them. Same as before, the menu icon and login icon will show a list when the mouse is hover on it.
                        </p>

                        <figure style = {{paddingTop: "50px"}}>
                            <center><img src = "images/redesign/HiFi-phone.png" alt = "High-Fidelity for mobile phone" width = "400px" height="auto" style = {{ border : "2px solid #000000" }} /></center>
                            <figcaption style= {{paddingTop: "10px", width: "850px", textAlign: "center"}}><i>Figure11: High-fidelity prototype for mobile phone</i></figcaption>
                        </figure>

                        <p className = "redesign-section-text-font" style = {{ paddingTop : "40px" }}>
                            When users visit this redesigned webpage on a mobile phone, the footer of the webpage will also change. The <i>Contact Information</i> and <i>Site Map</i> should use <b><i>flexbox layout</i></b> in <b><i>column flex direction</i></b>.
                        </p>
                    </div>

                    <div style={{paddingBottom: "30px"}}>
                        <h1 id = "responsive-redesign" className = "redesign-section-title-font" style = {{paddingTop: "50px"}}>Responsive Redesign</h1>
                        <p className = "redesign-section-text-font" style = {{ paddingTop : "30px" }}>
                            The responsive redesigned webpage can be found <b><a href = "https://smartfox998.github.io/Kindergarten/" target = "_blank" rel="noreferrer">here</a></b>. The original one can be found <a href = "http://nprovschools.org/kindergarten" target = "_blank" rel="noreferrer">here</a>.
                            In this new page, with login choice on the navigation bar, users are much easier to login to kindergarten's system in different ways.
                            It is also much easier for users to find important news and files (there is a <i>Important News</i> section now).
                            I also move the contact information and employment section (job opportunities) to the footer, which is more reasonable.
                            Most importantly, this webpage is now responsive!
                        </p>
                        <figure style = {{paddingTop: "50px"}}>
                            <img src = "images/redesign/problem-solved.png" alt = "no accessibility problem after redesign" width = "850px" height="auto" style = {{ border : "2px solid #000000" }} />
                            <figcaption style= {{paddingTop: "10px", width: "850px", textAlign: "center"}}><i>Figure12: No accessibility problem can be found using <a href = "https://wave.webaim.org/" target = "_blank" rel="noreferrer">WAVE</a> after redesign</i></figcaption>
                        </figure>

                        <p className = "redesign-section-text-font" style = {{ paddingTop : "40px" }}>
                            After the redesign and development, the new webpage has no accessibility problem anymore <i>(Figure12)</i>. Each image/icon has a alternative text, each link is very clear even in different background (because I change the link color according to the background color).
                        </p>

                        <figure style = {{paddingTop: "50px"}}>
                            <img src = "images/redesign/new-1.png" alt = "redesign webpage on desktop-1" width = "850px" height="auto" style = {{ border : "2px solid #000000" }} />
                            <figcaption style= {{paddingTop: "10px", width: "850px", textAlign: "center"}}><i>Figure13: Responsive redesign webpage on desktop (part 1)</i></figcaption>
                        </figure>

                        <figure style = {{paddingTop: "50px"}}>
                            <img src = "images/redesign/new-2.png" alt = "redesign webpage on desktop-2" width = "850px" height="auto" style = {{ border : "2px solid #000000" }} />
                            <figcaption style= {{paddingTop: "10px", width: "850px", textAlign: "center"}}><i>Figure14: Responsive redesign webpage on desktop (part 2)</i></figcaption>
                        </figure>

                        <figure style = {{paddingTop: "50px"}}>
                            <img src = "images/redesign/new-3.png" alt = "redesign webpage on desktop-3" width = "850px" height="auto" style = {{ border : "2px solid #000000" }} />
                            <figcaption style= {{paddingTop: "10px", width: "850px", textAlign: "center"}}><i>Figure15: Responsive redesign webpage on desktop (part 3)</i></figcaption>
                        </figure>

                        <figure style = {{paddingTop: "50px"}}>
                            <img src = "images/redesign/new-4.png" alt = "redesign webpage on desktop-4" width = "850px" height="auto" style = {{ border : "2px solid #000000" }} />
                            <figcaption style= {{paddingTop: "10px", width: "850px", textAlign: "center"}}><i>Figure16: Responsive redesign webpage on desktop with <b>dropdown list</b></i></figcaption>
                        </figure>

                        <p className = "redesign-section-text-font" style = {{ paddingTop : "40px" }}>
                            Each icon and each choice on the navigation bar is clickable in this responsive redesigned webpage. But currently, they will only redirect users to <b><i>Google's Homepage</i></b> for some privacy concern.
                            In <b><i>Important News</i></b> section <i>(Figure 14)</i>, I used a <b>slide window</b> to present important news. Users could click the <b>arrows</b> on the left and right to turn pages.
                        </p>

                        <figure style = {{paddingTop: "50px"}}>
                            <center><img src = "images/redesign/pad-1.png" alt = "redesign webpage on tablet-1" width = "600px" height="auto" style = {{ border : "2px solid #000000" }} /></center>
                            <figcaption style= {{paddingTop: "10px", width: "850px", textAlign: "center"}}><i>Figure17: Responsive redesign webpage on tablet (part 1)</i></figcaption>
                        </figure>

                        <figure style = {{paddingTop: "50px"}}>
                            <center><img src = "images/redesign/pad-2.png" alt = "redesign webpage on tablet-2" width = "600px" height="auto" style = {{ border : "2px solid #000000" }} /></center>
                            <figcaption style= {{paddingTop: "10px", width: "850px", textAlign: "center"}}><i>Figure18: Responsive redesign webpage on tablet (part 2)</i></figcaption>
                        </figure>

                        <figure style = {{paddingTop: "50px"}}>
                            <center><img src = "images/redesign/pad-3.png" alt = "redesign webpage on tablet-3" width = "600px" height="auto" style = {{ border : "2px solid #000000" }} /></center>
                            <figcaption style= {{paddingTop: "10px", width: "850px", textAlign: "center"}}><i>Figure19: Responsive redesign webpage on tablet with <b>dropdown list</b></i></figcaption>
                        </figure>

                        <figure style = {{paddingTop: "50px"}}>
                            <center><img src = "images/redesign/phone-1.png" alt = "redesign webpage on phone-1" width = "400px" height="auto" style = {{ border : "2px solid #000000" }} /></center>
                            <figcaption style= {{paddingTop: "10px", width: "850px", textAlign: "center"}}><i>Figure20: Responsive redesign webpage on mobile phone</i></figcaption>
                        </figure>

                        <figure style = {{paddingTop: "50px"}}>
                            <center><img src = "images/redesign/phone-2.png" alt = "redesign webpage on phone-2" width = "400px" height="auto" style = {{ border : "2px solid #000000" }} /></center>
                            <figcaption style= {{paddingTop: "10px", width: "850px", textAlign: "center"}}><i>Figure21: Responsive redesign webpage on mobile phone with <b>dropdown list</b></i></figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Redesign;