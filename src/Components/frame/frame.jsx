// import React from "react";
// import "./frame.css";


// const Frame = ({ images }) => {
//     return (
//         <div className="frame-container">
//             {images.map((image, index) => (
//                 <div key={index} className="photo-slot">
//                     <img src={image} alt={`Captured ${index + 1}`} className="captured-image" />
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default Frame;
// import React, { useRef } from "react";
// import "./frame.css";
// import Frog from '../../assets/frog.png'
// import html2canvas from "html2canvas";
// const Frame = ({ images }) => {
//     const frameRef = useRef();

//     return (
//         <div className="frame-wrapper">
//             <div className="frame-container" ref={frameRef}>
//                 {/* Captured Images */}
//                 {images.slice(0, 4).map((image, index) => (
//                     <img
//                         key={index}
//                         src={image}
//                         alt={`Captured ${index + 1}`}
//                         className={`photo-slot slot-${index + 1}`}
//                     />
//                 ))}

// <img src={Frog} className="sticker" style={{ top: "5px", left: "5px" }} alt="sticker" />
//   <img src={Frog} className="sticker" style={{ top: "5px", left: "60px" }} alt="sticker" />
//   <img src={Frog} className="sticker" style={{ top: "5px", left: "120px" }} alt="sticker" />
//   <img src={Frog} className="sticker" style={{ top: "5px", left: "180px" }} alt="sticker" />

//   <img src={Frog} className="sticker" style={{ bottom: "5px", left: "5px" }} alt="sticker" />
//   <img src={Frog} className="sticker" style={{ bottom: "5px", left: "60px" }} alt="sticker" />
//   <img src={Frog} className="sticker" style={{ bottom: "5px", left: "120px" }} alt="sticker" />
//   <img src={Frog} className="sticker" style={{ bottom: "5px", left: "180px" }} alt="sticker" />

//   <img src={Frog} className="sticker" style={{ top: "60px", left: "-5px" }} alt="sticker" />
//   <img src={Frog} className="sticker" style={{ top: "140px", left: "-5px" }} alt="sticker" />
//   <img src={Frog} className="sticker" style={{ top: "220px", left: "-5px" }} alt="sticker" />
//   <img src={Frog} className="sticker" style={{ top: "300px", left: "-5px" }} alt="sticker" />

//   <img src={Frog} className="sticker" style={{ top: "60px", right: "-5px" }} alt="sticker" />
//   <img src={Frog} className="sticker" style={{ top: "140px", right: "-5px" }} alt="sticker" />
//   <img src={Frog} className="sticker" style={{ top: "220px", right: "-5px" }} alt="sticker" />
//   <img src={Frog} className="sticker" style={{ top: "300px", right: "-5px" }} alt="sticker" />

//             </div>
//         </div>
//     );
// };

// export default Frame;


import React, { useRef } from "react";
import html2canvas from "html2canvas";
import "./frame.css";
import Frog from '../../assets/frog.png';

const Frame = ({ images }) => {
  const frameRef = useRef();

  const handleDownload = () => {
    // Get the frame element and capture it using html2canvas
    html2canvas(frameRef.current).then((canvas) => {
      // Create a link element
      const link = document.createElement('a');
      // Set the link's download attribute to specify the file name
      link.download = 'photoBooth.png';
      // Convert canvas to a data URL and set it as the href of the link
      link.href = canvas.toDataURL();
      // Trigger the download by simulating a click
      link.click();
    });
  };

  return (
    <div className="frame-wrapper">
      <div className="frame-container" ref={frameRef}>
        {/* Captured Images */}
        {images.slice(0, 4).map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Captured ${index + 1}`}
            className={`photo-slot slot-${index + 1}`}
          />
        ))}

        {/* Stickers */}
        <img src={Frog} className="sticker" style={{ top: "5px", left: "5px" }} alt="sticker" />
        <img src={Frog} className="sticker" style={{ top: "5px", left: "60px" }} alt="sticker" />
        <img src={Frog} className="sticker" style={{ top: "5px", left: "120px" }} alt="sticker" />
        <img src={Frog} className="sticker" style={{ top: "5px", left: "180px" }} alt="sticker" />

        <img src={Frog} className="sticker" style={{ bottom: "5px", left: "5px" }} alt="sticker" />
        <img src={Frog} className="sticker" style={{ bottom: "5px", left: "60px" }} alt="sticker" />
        <img src={Frog} className="sticker" style={{ bottom: "5px", left: "120px" }} alt="sticker" />
        <img src={Frog} className="sticker" style={{ bottom: "5px", left: "180px" }} alt="sticker" />

        <img src={Frog} className="sticker" style={{ top: "60px", left: "-5px" }} alt="sticker" />
        <img src={Frog} className="sticker" style={{ top: "140px", left: "-5px" }} alt="sticker" />
        <img src={Frog} className="sticker" style={{ top: "220px", left: "-5px" }} alt="sticker" />
        <img src={Frog} className="sticker" style={{ top: "300px", left: "-5px" }} alt="sticker" />

        <img src={Frog} className="sticker" style={{ top: "60px", right: "-5px" }} alt="sticker" />
        <img src={Frog} className="sticker" style={{ top: "140px", right: "-5px" }} alt="sticker" />
        <img src={Frog} className="sticker" style={{ top: "220px", right: "-5px" }} alt="sticker" />
        <img src={Frog} className="sticker" style={{ top: "300px", right: "-5px" }} alt="sticker" />
      </div>
      
      {/* Download Button */}
      <button onClick={handleDownload} className="download-btn">
        Download
      </button>
    </div>
  );
};

export default Frame;

