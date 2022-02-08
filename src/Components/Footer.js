import React from "react"
import Twitter from "./../Images/Twitter-icon.png"
import Facebook from "./../Images/Facebook-icon.png"
import Instagram from "./../Images/Instagram-icon.png"
import Github from "./../Images/Github-icon.png"

export default function Footer() {
    return (
        <div>
            <nav className="footer-section">
                <button><img src={Twitter} /></button>
                <button><img src={Facebook} /></button>
                <button><img src={Instagram} /></button>
                <button><img src={Github} /></button>
            </nav>
        </div>
    )
}