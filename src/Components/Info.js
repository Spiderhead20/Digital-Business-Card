import React from "react"
import Profile from "./../Images/Profile.jpeg"
import LinkedinLogo from "./../Images/Linkedin-Logo.png"
import EmailLogo from "./../Images/Email-logo.png"

export default function Info() {
    return (
        <div className="info-section">
            <img className="info-img" src={Profile} alt="Profile photo" />
            <div className="info-sub">
                <h1 className="info-name">David Zuniga Nieto</h1>
                <h2 className="info-job">Software Developer</h2>
                <a className="info-website" href="https://spiderhead20.itch.io/">david.Website</a>
                <nav className="info-buttons">
                    <button className="info-email">
                        <a>Email</a>
                        <img src={EmailLogo} />
                    </button>
                    <button className="info-linkedin">
                        <a>Linkedin</a>
                        <img src={LinkedinLogo} />
                    </button>
                </nav>
            </div>
        </div>
    )
}