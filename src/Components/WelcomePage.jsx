import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Camera_Pic from "../assets/camera.png";
import React from "react";
import { HiOutlineCamera } from "react-icons/hi";
import { FiUpload } from "react-icons/fi";
import { motion } from "framer-motion";

const WelcomePage = () => {
    const navigate = useNavigate();
    const [isZooming, setIsZooming] = useState(false);

    // Function to start zoom effect and navigate after animation
    const handleStart = () => {
        setIsZooming(true);
        setTimeout(() => navigate("/Instructions"), 1200); // Navigate after animation
    };

    return (
        <div className="WelcomePage-container">
            <div className="box">
                <h1>Welcome to Poy's Photobooth!</h1>
                <div className="innerWelcomeContainer">
                    <h3>Snap, Edit, and Share - Your digital photo booth</h3>
                    
                    {/* Animated Camera Image */}
                    <motion.img 
                        src={Camera_Pic} 
                        alt="Camera"
                        animate={isZooming 
                            ? { scale: 8, x: "-50%", y: "-30%", opacity: 0 } // Zoom directly into lens
                            : { rotate: [0, -10, 10, -10, 0] } // Continuous rotation
                        }
                        transition={isZooming 
                            ? { duration: 1.2, ease: "easeInOut" } // Smooth zoom transition
                            : { repeat: Infinity, duration: 2, ease: "easeInOut" } // Continuous rotation
                        }
                    />
                </div>

                <div className="button-container">
                    <button onClick={handleStart}>Use camera <HiOutlineCamera/></button>
                    <button onClick={() => navigate('/Upload')}>Upload image <FiUpload/></button>
                </div>
            </div>
        </div>
    );
};

export default WelcomePage;
