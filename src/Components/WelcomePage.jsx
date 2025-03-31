import { useNavigate } from "react-router-dom";
import Camera_Pic from "../assets/camera.png"
import React from "react";
import { HiOutlineCamera } from "react-icons/hi";
import { FiUpload } from "react-icons/fi";

const WelcomePage = () => {
    const navigate = useNavigate();

    return (
        <div className="WelcomePage-container">
            <div className="box">
                <h1>Welcome to Poy's Photobooth!</h1>
                <div className="innerWelcomeContainer">
                    <h3>Snap, Edit, and Share - Your digital photo booth</h3>
                    <img src={Camera_Pic} alt="" />
                </div>

                <div className="button-conatiner">
                    <button onClick={() => navigate('/Instructions')}>Use camera <HiOutlineCamera/></button>
                    <button onClick={() => navigate('/Upload')}>Upload image <FiUpload/></button>
                </div>
            </div>
        </div>
    )
};

export default WelcomePage;