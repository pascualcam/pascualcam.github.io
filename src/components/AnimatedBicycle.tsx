import React, { useEffect, useState } from 'react';

// Helper to generate spokes as SVG lines
function Spokes({ cx, cy, r, count = 8, stroke = '#bbb', strokeWidth = 1 }: { cx: number; cy: number; r: number; count?: number; stroke?: string; strokeWidth?: number }) {
    const spokes = [];
    for (let i = 0; i < count; i++) {
        const angle = (2 * Math.PI * i) / count;
        const x2 = cx + r * Math.cos(angle);
        const y2 = cy + r * Math.sin(angle);
        spokes.push(
            <line
                key={i}
                x1={cx}
                y1={cy}
                x2={x2}
                y2={y2}
                stroke={stroke}
                strokeWidth={strokeWidth}
            />
        );
    }
    return <>{spokes}</>;
}

const getWheelFill = () => {
    if (typeof document !== 'undefined') {
        return document.documentElement.classList.contains('dark') ? '#111' : '#fff';
    }
    return '#fff';
};

const AnimatedBicycle = () => {
    const [wheelFill, setWheelFill] = useState(getWheelFill());
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const updateFill = () => {
            setWheelFill(document.documentElement.classList.contains('dark') ? '#111' : '#fff');
        };
        updateFill();
        // Listen for class changes on <html>
        const observer = new MutationObserver(updateFill);
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
        return () => observer.disconnect();
    }, []);

    return (
        <svg
            width="120"
            height="80"
            viewBox="0 0 120 80"
            xmlns="http://www.w3.org/2000/svg"
            aria-labelledby="bicycleTitle"
            role="img"
            className="bike"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <title id="bicycleTitle">Animated Bicycle</title>

            {/* Rear Wheel */}
            <g className={`wheel rear-wheel spinning${isHovered ? ' paused' : ''}`}>
                <circle cx="30" cy="60" r="16" stroke="#222" strokeWidth="3" fill={wheelFill} />
                <Spokes cx={30} cy={60} r={14} count={10} stroke="#bbb" strokeWidth={1.2} />
                <circle cx="30" cy="60" r="3" stroke="#888" strokeWidth="2" fill="#888" />
            </g>

            {/* Front Wheel */}
            <g className={`wheel front-wheel spinning${isHovered ? ' paused' : ''}`}>
                <circle cx="90" cy="60" r="16" stroke="#222" strokeWidth="3" fill={wheelFill} />
                <Spokes cx={90} cy={60} r={14} count={10} stroke="#bbb" strokeWidth={1.2} />
                <circle cx="90" cy="60" r="3" stroke="#888" strokeWidth="2" fill="#888" />
            </g>

            {/* Frame - proper bicycle geometry */}
            <g className="frame">
                {/* Main triangle */}
                {/* Top tube: seat to head tube - completely horizontal */}
                <line x1="45" y1="35" x2="85" y2="35" stroke="#1976d2" strokeWidth="4" />
                {/* Seat tube: seat to bottom bracket */}
                <line x1="45" y1="35" x2="55" y2="58" stroke="#1976d2" strokeWidth="4" />
                {/* Down tube: head tube to bottom bracket */}
                <line x1="85" y1="35" x2="55" y2="58" stroke="#1976d2" strokeWidth="4" />

                {/* Rear triangle */}
                {/* Chain stay: bottom bracket to rear axle */}
                <line x1="55" y1="58" x2="30" y2="60" stroke="#1976d2" strokeWidth="4" />
                {/* Seat stay: seat tube to rear axle */}
                <line x1="45" y1="35" x2="30" y2="60" stroke="#1976d2" strokeWidth="4" />

                {/* Fork and steering */}
                {/* Head tube extension */}
                <line x1="85" y1="35" x2="88" y2="28" stroke="#1976d2" strokeWidth="4" />
                {/* Fork: head tube to front axle */}
                <line x1="88" y1="28" x2="90" y2="60" stroke="#1976d2" strokeWidth="4" />
            </g>

            {/* Seat */}
            <g className="seat">
                <ellipse cx="45" cy="25" rx="8" ry="3" fill="#444" />
                {/* Seat post */}
                <line x1="45" y1="28" x2="45" y2="35" stroke="#666" strokeWidth="2" />
            </g>

            {/* Pedals and crank */}
            <g className="pedals">
                {/* Bottom bracket */}
                <circle cx="55" cy="58" r="3" fill="#444" />
                {/* Crank arms and pedals - removed animation to prevent visual artifacts */}
                <g className="crank">
                    <line x1="55" y1="58" x2="50" y2="68" stroke="#666" strokeWidth="3" />
                    <line x1="55" y1="58" x2="60" y2="48" stroke="#666" strokeWidth="3" />
                    {/* Pedals */}
                    <rect x="47" y="67" width="6" height="3" rx="1.5" fill="#888" />
                    <rect x="57" y="47" width="6" height="3" rx="1.5" fill="#888" />
                </g>
            </g>

            {/* Dropbars */}
            <g className="handlebars">
                {/* Horizontal stem from head tube */}
                <line x1="88" y1="28" x2="94" y2="28" stroke="#444" strokeWidth="3" />

                {/* Drop bar: horizontal extension then curve down */}
                <path
                    d="M94 28
           h6
           q3 0 3 6"
                    stroke="#444"
                    strokeWidth="3"
                    fill="none"
                />

                {/* Grip end */}
                <circle cx="103" cy="34" r="2" fill="#666" />
            </g>

            {/* Chain (simple representation) */}
            <g className="chain">
                <path
                    d="M 55 58 Q 42 62 30 60"
                    stroke="#888"
                    strokeWidth="1.5"
                    fill="none"
                    strokeDasharray="2,2"
                />
            </g>

            <style>{`
                @keyframes spin {
                    100% { transform: rotate(360deg); }
                }
                .spinning {
                    animation: spin 1.2s linear infinite;
                    transform-box: fill-box;
                    transform-origin: 50% 50%;
                }
                .paused {
                    animation-play-state: paused;
                }
                .bike .crank {
                    transform-box: fill-box;
                    transform-origin: 55px 58px;
                }
            `}</style>
        </svg>
    );
};

export default AnimatedBicycle;
