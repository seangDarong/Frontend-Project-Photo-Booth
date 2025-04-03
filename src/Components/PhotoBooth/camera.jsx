import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";


const Camera = ({ onCapture }) => {
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const [capturedCount, setCapturedCount] = useState(0); // Track captured images count
    const [isCapturing, setIsCapturing] = useState(false); // Track if the capture process is in progress
    const [timer, setTimer] = useState(3); // Timer to display the countdown
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

        // Cleanup function to stop the camera stream when the component is unmounted or when navigating away
        return () => {
            if (videoRef.current && videoRef.current.srcObject) {
                videoRef.current.srcObject.getTracks().forEach(track => track.stop());
            }
        };
    }, []); // Empty dependency array ensures this runs once when the component mounts

    // useEffect(() => {
    //     let intervalId;

    //     if (isCapturing) {
    //         intervalId = setInterval(() => {
    //             setTimer((prevTimer) => {
    //                 if (prevTimer === 1) {
    //                     captureImage();
    //                     setCapturedCount((prevCount) => prevCount + 1);
    //                     return 3; // Reset the timer for the next shot
    //                 } else {
    //                     return prevTimer - 1;
    //                 }
    //             });
    //         }, 1000); // Update the timer every second
    //     }

    //     // Stop capturing after 4 images
    //     if (capturedCount === 4) {
    //         clearInterval(intervalId);
    //         setIsCapturing(false);
    //     }

    //     // Cleanup interval on component unmount or when capturing stops
    //     return () => clearInterval(intervalId);
    // }, [isCapturing, capturedCount]);
    useEffect(() => {
      let intervalId;
  
      if (isCapturing) {
          intervalId = setInterval(() => {
              setTimer((prevTimer) => {
                  if (prevTimer === 1) {
                      clearInterval(intervalId); // Clear the interval first
                      captureImage();
                      setCapturedCount((prevCount) => {
                          const newCount = prevCount + 1;
                          if (newCount < 4) {
                              // Only reset timer if we're not done capturing
                              setTimeout(() => setTimer(3), 0);
                          }
                          return newCount;
                      });
                      return 0; // Set timer to 0 to prevent immediate re-trigger
                  }
                  return prevTimer - 1;
              });
          }, 1000);
      }
  
      // Stop capturing after 4 images
      if (capturedCount === 4) {
          clearInterval(intervalId);
          setIsCapturing(false);
      }
  
      return () => clearInterval(intervalId);
  }, [isCapturing, capturedCount]);

    const captureImages = () => {
        if (!isCapturing) {
            setIsCapturing(true); // Start capturing
            setCapturedCount(0); // Reset the captured count
            setTimer(3); // Reset the timer
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
    
            // Reset canvas dimensions
            canvas.width = width;
            canvas.height = height;
    
            context.translate(width, 0);
            context.scale(-1, 1);
            context.drawImage(videoRef.current, 0, 0, width, height);
    
            const imgData = canvas.toDataURL("image/png");
            onCapture(imgData); // Pass the captured image to the parent
        }
    };

    return (
        <section className="video-container">
            <video ref={videoRef} className="video" autoPlay></video>
            <canvas ref={canvasRef} style={{ display: "none" }}></canvas>
            <div className="btn">
                <button
                    className="capture-button"
                    onClick={captureImages} // Start the image capture process
                    disabled={isCapturing} // Disable the button while capturing
                >
                    Snap
                </button>
                {/* <button onClick={() => navigate("/editing-page")}>Next</button> */}
            </div>

            {/* Display the timer */}
            {isCapturing && (
                <div className="timer">
                    <p>Capturing in: {timer}s</p>
                </div>
            )}
        </section>
    );
};

export default Camera;