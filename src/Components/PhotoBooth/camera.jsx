
import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Camera = ({ onCapture }) => {
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const [capturedCount, setCapturedCount] = useState(0);
    const [isCapturing, setIsCapturing] = useState(false);
    const [timer, setTimer] = useState(3);
    const navigate = useNavigate();

    useEffect(() => {
        // Initialize the camera
        const initCamera = async () => {
            if (videoRef.current) {
                try {
                    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
                    videoRef.current.srcObject = stream;
                } catch (err) {
                    console.log("Error accessing the camera: ", err);
                }
            }
        };

        initCamera();

        return () => {
            if (videoRef.current && videoRef.current.srcObject) {
                videoRef.current.srcObject.getTracks().forEach(track => track.stop());
            }
        };
    }, []);

    useEffect(() => {
        let timeoutId;

        if (isCapturing && capturedCount < 4) {
            if (timer > 0) {
                // Countdown phase
                timeoutId = setTimeout(() => {
                    setTimer(prev => prev - 1);
                }, 1000);
            } else {
                // Timer reached 0 - capture image
                captureImage();
                setCapturedCount(prev => prev + 1);
                
                // Reset timer for next capture if we haven't reached the limit
                if (capturedCount < 3) {
                    setTimer(3);
                } else {
                    // We've taken all 4 pictures
                    setIsCapturing(false);
                }
            }
        }

        return () => clearTimeout(timeoutId);
    }, [isCapturing, timer, capturedCount]);

    const captureImages = () => {
        if (!isCapturing) {
            setIsCapturing(true);
            setCapturedCount(0);
            setTimer(3);
        }
    };

    const captureImage = () => {
        if (videoRef.current && canvasRef.current) {
            const canvas = canvasRef.current;
            const context = canvas.getContext("2d");

            const videoWidth = videoRef.current.videoWidth;
            const videoHeight = videoRef.current.videoHeight;
            const resizeFactor = 0.5;
            const width = videoWidth * resizeFactor;
            const height = videoHeight * resizeFactor;

            canvas.width = width;
            canvas.height = height;

            context.translate(width, 0);
            context.scale(-1, 1);
            context.drawImage(videoRef.current, 0, 0, width, height);

            const imgData = canvas.toDataURL("image/png");
            onCapture(imgData);
        }
    };

    return (
        <section className="video-container">
            <video ref={videoRef} className="video" autoPlay></video>
            <canvas ref={canvasRef} style={{ display: "none" }}></canvas>
            <div className="btn">
                <button
                    className="capture-button"
                    onClick={captureImages}
                    disabled={isCapturing}
                >
                    Snap
                </button>
            </div>

            {isCapturing && (
                <div className="timer">
                    <p>Capturing in: {timer}s</p>
                </div>
            )}
        </section>
    );
};

export default Camera;