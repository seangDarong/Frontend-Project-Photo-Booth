import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Camera from "./PhotoBooth/camera";
import CapturedImages from "./PhotoBooth/capturedImage";

const PhotoBooth = () => {
    const navigate = useNavigate();
    const [capturedImages, setCapturedImages] = useState([]);

    const handleCapture = (imageData) => {
        setCapturedImages((prevImages) => [...prevImages, imageData]);
    };

    const handleNext = () => {
        
        navigate("/Styling", { state: { images: capturedImages } });
    };

    return (
        <div className="photoBooth-container">
            <div className="camera-section">
                <Camera onCapture={handleCapture} />
            </div>
            <div className="pic-container">
                <CapturedImages images={capturedImages} />
            </div>
            <button onClick={handleNext} disabled={capturedImages.length < 4} className="next-button">
                Next
            </button>
        </div>
    );
};

export default PhotoBooth;