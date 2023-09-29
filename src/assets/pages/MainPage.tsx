import React from 'react';
import { Avatar, Background } from '../elements';
import AboutMe from './About';

const MainPage: React.FC = () => {
    return (
        <div className="background">
            <Background/>
            <Avatar/>
            <AboutMe/>
        </div>
    );
}

export default MainPage;
