// src/components/FeatureCard.js

import React, { useState } from 'react';

const FeatureCard = ({ feature }) => {
    const [showDetails, setShowDetails] = useState(false);

    const toggleDetails = () => {
        setShowDetails(!showDetails);
    };

    return (
        <div
            style={{
                border: '1px solid #ddd',
                borderRadius: '10px',
                margin: '10px',
                padding: '15px',
                cursor: 'pointer',
                transition: 'transform 0.2s',
                boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
            }}
            onClick={toggleDetails}
        >
            <h3 style={{ margin: '0 0 10px' }}>{feature.title}</h3>
            <p>{feature.shortDescription}</p>
            {showDetails && (
                <div style={{ marginTop: '10px', borderTop: '1px solid #ddd', paddingTop: '10px' }}>
                    {feature.details}
                </div>
            )}
        </div>
    );
};

export default FeatureCard;
