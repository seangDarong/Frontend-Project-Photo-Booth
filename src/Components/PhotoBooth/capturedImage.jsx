import React from "react";


const CapturedImages = ({ images }) => {
    return (
        <>
            {images.map((image, index) => (
                <img 
                    key={index} 
                    src={image} 
                    alt={`${index + 1}`} 
                    className="captured-image" 
                />
            ))}
        </>
    );
};

export default CapturedImages;