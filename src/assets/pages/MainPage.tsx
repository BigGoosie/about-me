import React, { useEffect, useState } from 'react';
import { Avatar, About } from '../elements';

const MainPage: React.FC = () => {
    const [rotatingTitle, setRotatingTitle] = useState('Solace');
    const [titleHistory, setTitleHistory] = useState(['Solace']); 
    
    const wordList = ['Solace', 'Despair', 'Desperation', 'Anguish', 'Torment', 'Sorrow', 'Misery', 'Grief', 'Woe', 'Agony'];
    document.title = rotatingTitle;
    
    useEffect(() => {
        const changeTitle = () => {
            setRotatingTitle(prevText => {
                const availableWords = wordList.filter(word => word !== prevText && !titleHistory.includes(word));
                const randomWord = availableWords[Math.floor(Math.random() * availableWords.length)];
    
                // Update the history
                const newHistory = [...titleHistory, randomWord];
                if (newHistory.length > 4) {
                    newHistory.shift();
                }
                setTitleHistory(newHistory);
    
                document.title = randomWord;
                return randomWord;
            });
        };
    
        const interval = Math.random() * 1500 + 1000;  
        const toggleText = setTimeout(changeTitle, interval);
        
        return () => clearTimeout(toggleText);
    }, [rotatingTitle, titleHistory]);

    return (
        <>
            <Avatar/>
            <About/>
        </>
    );
}

export default MainPage;