import React from 'react';
import './About.css';

import { Steam, Backpack, Discord } from '../images';
const About: React.FC = () => {

    const copyToClipboard = (content: string) => {
        navigator.clipboard.writeText(content).then(() => {
            console.log("copied to clipboard!")
        }, (err) => {
            console.error("Error copying to clipboard", err);
        });
    }    

    return (
        <div className="about-me-container">
            "An entity forged in the fiery pits of hell; Riddled with despair, yet they continue ravaging frozen wasteland of Canada"
            <br />
            Welcome, my names Goose; Current hobbies are programming, video games, and music.
            <br />
            I'm non-binary and bisexual. Pronouns are He/Him - They/Them ~ Probably a pyromaniac ~ Class of 2024 :]

            <div className="links-container">
                <a href="https://steamcommunity.com/profiles/76561198841275520" target="_blank" rel="noopener noreferrer" className="custom-link">
                    <img src={Steam} alt="Steam Logo" className="link-prefix-image" />
                    Steam Profile
                </a>
                <a href="https://next.backpack.tf/profiles/76561198841275520" target="_blank" rel="noopener noreferrer" className="custom-link">
                    <img src={Backpack} alt="Backpack Logo" className="link-prefix-image" />
                    Backpack.tf
                </a>
                <div className="custom-link" onClick={() => copyToClipboard("ghostygoose")}>
                    <img src={Discord} alt="Discord Logo" className="link-prefix-image" />
                    My Discord
                </div>
                <a href="#" target="_blank" className="custom-link">Placeholder :o</a>
            </div>
        </div>
    );
}

export default About;
/*
    # Steam Profile
    # Backpack.tf
    # Rep.tf
    # Trading portfolio
*/