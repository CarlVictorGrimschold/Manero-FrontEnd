import React from "react";  
 
const Popup = ({ onConfirm, onCancel, show }) => {
  return (
    show && (
      <div className="popupen">
        <div className="inner-border">
          <p className="signouttext">Sure you want to sign out?</p>
          <div className="buttons-container">
            <button className="popbutton" onClick={onConfirm}>
              Sure
            </button>
            <button className="popbutton" onClick={onCancel}>
              Cancel
            </button>
          </div>
        </div>
       
      
      </div>

      
    )
    
  );
  
};
export default Popup;


