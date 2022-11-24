import React from 'react';
import '../css/Start.css';
import title from "../css/title.png";
function Start() {
    return (<>
        <div className="App">
            <header className="App-header">
                <img src={title} alt="title" />
                <a
                    className="App-link"
                    href="/Login"
                >
                    Start Project 1
                </a>
            </header>
        </div>
        </>
    )
}
export default Start;