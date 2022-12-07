import '../styles/homepage.css'

function Homepage() {
    return (
        <div>
            <div class = "flex-container-row">
                <div class = "navigation-bar">
                    <div>
                        <h2>Smart Fox</h2>
                    </div>

                    <div class = "about">
                        <h2>Works</h2>
                        <h2><a href="https://cs.brown.edu/" target = "_blank">Graduate School</a></h2>
                    </div>
                </div>

                <div class = "introduction">
                    <div class = "introduction-text-section">
                        <p>Hey, folks!</p>
                        <img src = "images/wave.gif" alt = "wave hand" width="auto" height="70" />
                    </div>
                    <div class = "introduction-text-section">
                        <p>I'm a computer science master student at <u><a href="https://www.brown.edu/" target = "_blank">Brown University</a></u>.</p>
                    </div>
                    <div class = "introduction-text-section">
                        <p>I'm also a passionate UI designer pursuing intuitive solutions.</p>
                    </div>
                    <div class = "introduction-text-section">
                        <p>You can find some of my works here.</p>
                    </div>
                </div>

                <div class = "work-section">
                    <div class = "work grow blur">
                        <a href="https://smartfox998.github.io/Personas/">
                        <img src = "images/bus.jpeg" alt="a bus with bike rack" width="700px" height="auto" />
                        </a>
                        <p class = "work-title">Personas & Storyboarding</p>
                        <p class = "work-description">
                            Observe real users interacting with the bike rack on bus, interview these individuals about their experiences, create personas based on these users, and illustrate a storyboard for one of the personas.
                        </p>
                    </div>

                    <div class = "work grow blur">
                        <a href="https://smartfox998.github.io/Responsive-Redesign/">
                            <img src = "images/kindergarten.jpeg" alt="children" width="700px" height="auto" />
                        </a>
                        <p class = "work-title">Responsive Redesign</p>
                        <p class = "work-description">
                            Analyze and identify flaws in the <a href="http://nprovschools.org/kindergarten" target = "_blank">homepage</a> of a kindergarten at providence. 
                            Create low-fidelity and high-fidelity prototypes for various screen sizes, and build a responsive website based on those prototypes.
                        </p>
                    </div>

                    <div class = "work grow blur">
                        <a href="https://smartfox998.github.io/Iterative-Design/">
                            <img src = "images/bananas.png" alt="a startup called bananas" width="700px" height="auto" />
                        </a>
                        <p class = "work-title">Iterative Design</p>
                        <p class = "work-description">
                            Working with three teammates, sketch, create interactive high fidelity prototype, design and launch user test.
                            Step by step, go through the full process of mocking up a solution to the a startup's concept.
                        </p>
                    </div>

                    <div class = "work grow blur">
                        <a href="https://smartfox998.github.io/Development/">
                            <img src = "images/grocery.jpeg" alt="grocery store" width="700px" height="auto" />
                        </a>
                        <p class = "work-title">React Development</p>
                        <p class = "work-description">
                            Use interface components, tie the components to an internal data state and develop a shooping page for a grocery store.
                            Users could select items out of a list, which then aggregates them. Different filters and sorting features are also added to satisfy users' requirements. 
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Homepage;