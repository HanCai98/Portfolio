import '../styles/homepage.css'

function Homepage() {
    return (
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
        </div>
    )
}

export default Homepage;