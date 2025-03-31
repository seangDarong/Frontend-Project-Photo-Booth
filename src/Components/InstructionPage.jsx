import React from "react";
import { useNavigate } from "react-router-dom";

function InstructionPage() {
    const navigate = useNavigate();
  return (
    <div className="instructionPage_container">
        <div className="instruction_container">
            <h1>Notice:</h1>
            <h4>You have 3 seconds for each shot - no retakes!
                <br />
                This photobooth captures 4 pictures in a row, so strike your best pose and have fun!
            </h4>
            <h4>After the session, download your digital copy and share the fun!</h4>
            <button onClick={()=> navigate('/PhotoBooth')}>Start</button>
        </div>
    </div>
  );
}

export default InstructionPage;
