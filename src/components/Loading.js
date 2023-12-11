import React from 'react';

const Loading = () => {
    const containerStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    };

    const contentStyle = {
        textAlign: 'center',
    };
    const headingStyle = {
        color: '#5B36B1',
        fontFamily: '"Aoboshi One", serif',
    };
    return (
        <div style={containerStyle}>

            <div style={contentStyle}>
                <h3 style={headingStyle}>당신 곁에 친구, 문버디</h3>
                <img src={"/imgs/loading.gif"} />
            </div>
        </div>
    );
};

export default Loading;