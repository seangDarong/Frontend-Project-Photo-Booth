import React from "react";
import Frame from '../Components/frame/frame'
import { useLocation,useNavigate } from "react-router-dom";
function StylingPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const images = location.state?.images|| [];
  return (
    <div>
      <h1>Styling Page</h1>
      <Frame images={images}/>
      
    </div>
  );
}

export default StylingPage;
