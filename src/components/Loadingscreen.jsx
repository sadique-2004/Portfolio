import React from 'react';
import loadingVedio from '../assets/Loading3.mp4';

const LoadingScreen = ({ onLoaded }) => {
    // Automatically call onLoaded after a delay (e.g., 1.8 seconds)
    React.useEffect(() => {
        const timer = setTimeout(() => {
            onLoaded();
        }, 1800);

        return () => clearTimeout(timer);
    }, [onLoaded]);
    
    return (
        <div className="flex justify-center items-center h-screen bg-white-500 text-transparent">
            <video
                src={loadingVedio} 
                autoPlay
                loop
                muted // Remove muted if audio is required
                className="w-80 h-80 rounded-full max-w-full max-h-full"
            />
        </div>
    );
};

export default LoadingScreen;
