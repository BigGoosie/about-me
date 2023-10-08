import { Link } from 'react-router-dom';
import React from 'react';
import './About.css';

import { Graph, Github, Links } from '../images';
const About: React.FC = () => {
    return (
        <div className="about-me-container">
            "An entity forged in the flames of torment; Riddled with despair, nevertheless, they continue ravaging frozen wasteland of Canada"
            <br />
            Welcome, my names Goose; Current hobbies are programming, video games, and music.
            <br />
            I'm non-binary & bi/omnisexual. Pronouns are He/Him, They/Them - <span className="strikethrough">Probably</span> a pyromaniac - Class of 2024 :]

            <div className="links-container">
                <Link to="/projects" className="custom-link">
                    <img src={Github} alt="Github Logo" className="link-prefix-image" />
                    <span className="link-text">Project List</span>
                </Link>

                <Link to="/links" className="custom-link">
                    <img src={Links} alt="Links Logo" className="link-prefix-image" />
                    <span className="link-text">Links</span>
                </Link>

                <Link to="/trading" className="custom-link">
                    <img src={Graph} alt="Trading Logo" className="link-prefix-image" />
                    <span className="link-text">Trading Page</span>
                </Link>
            </div>
        </div>
    );
}

export default About;
/*
    User goes to page: http://localhost:4000 this is the home page
    User decides to go to http://localhost:4000/projects
    User presses mouse button to go back a page, works as expected

    User decides to go to http://localhost:4000/projects and then removes the 'projects' bit so that its now http://localhost:4000
    User presses enter, it redirects them to http://localhost:4000/links, user removes the 'links' bit expecting to go back to the home page
    User gets redirected back to http://localhost:4000/links
*/