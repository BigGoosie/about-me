import React from 'react';
import { Avatar, Background, About } from '../elements';

const MainPage: React.FC = () => {
    return (
        <div className="background">
            <Background/>
            <Avatar/>
            <About/>
        </div>
    );
}

export default MainPage;
