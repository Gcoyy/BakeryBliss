import React, { useState, useEffect } from 'react';

const LoadingSpinner = ({ message = "Loading...", size = "large" }) => {
    const [progress, setProgress] = useState(0);
    const [isComplete, setIsComplete] = useState(false);

    // Simulate progress loading
    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    setIsComplete(true);
                    clearInterval(interval);
                    return 100;
                }
                return prev + Math.random() * 15; // Random increment for realistic progress
            });
        }, 200);

        return () => clearInterval(interval);
    }, []);
    if (size === "small") {
        return (
            <div className="flex items-center justify-center space-x-2">
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-patisserie-rose-strong border-t-transparent"></div>
                <span className="text-sm text-gray-600">{message}</span>
            </div>
        );
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-patisserie-vanilla">
            <div className="relative z-10 overflow-hidden rounded-3xl border border-patisserie-blush bg-white shadow-lg">
                <div className="bg-patisserie-blush px-8 py-6 text-center">
                    <div className="flex items-center justify-center mb-4">
                        {/* Animated Cake Icon */}
                        <div className="relative">
                            <div className="w-16 h-16 bg-white/20 rounded-2xl relative overflow-hidden backdrop-blur-sm">
                                {/* Cake layers */}
                                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-white/40 rounded-b-2xl"></div>
                                <div className="absolute bottom-1/3 left-0 right-0 h-1/3 bg-white/30"></div>
                                <div className="absolute bottom-2/3 left-0 right-0 h-1/3 bg-white/50 rounded-t-2xl"></div>

                                {/* Candle */}
                                <div className="absolute left-1/2 top-1 h-3 w-1 -translate-x-1/2 rounded-full bg-patisserie-buttercream">
                                    <div className="absolute -top-0.5 left-1/2 h-1.5 w-1.5 -translate-x-1/2 animate-pulse rounded-full bg-patisserie-rose-strong"></div>
                                </div>
                            </div>

                            {/* Spinning animation around the cake */}
                            <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-r-patisserie-rose/50 border-t-patisserie-rose-strong"></div>
                        </div>
                    </div>
                    <h2 className="font-abhaya text-2xl font-bold text-patisserie-cocoa">Connie de Café</h2>
                </div>

                {/* Content area */}
                <div className="px-8 py-6 text-center">
                    <p className="mb-6 text-lg font-medium text-patisserie-cocoa">{message}</p>

                    {/* Modern loading animation */}
                    <div className="flex items-center justify-center space-x-2 mb-4">
                        <div className="h-3 w-3 animate-bounce rounded-full bg-patisserie-rose-strong" style={{ animationDelay: '0ms' }}></div>
                        <div className="h-3 w-3 animate-bounce rounded-full bg-patisserie-rose" style={{ animationDelay: '150ms' }}></div>
                        <div className="h-3 w-3 animate-bounce rounded-full bg-patisserie-buttercream" style={{ animationDelay: '300ms' }}></div>
                    </div>

                    {/* Progress bar */}
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                        <div
                            className="h-full origin-left rounded-full bg-patisserie-rose-strong transition-all duration-300 ease-out"
                            style={{
                                transform: `scaleX(${progress / 100})`,
                                transformOrigin: 'left'
                            }}
                        ></div>
                    </div>
                    {/* Progress percentage */}
                    <div className="text-sm text-gray-500 mt-2">
                        {Math.round(progress)}%
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoadingSpinner; 