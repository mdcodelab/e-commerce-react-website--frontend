import React from 'react';
import spinner from "../assets/spinner.gif";

function Loading() {
  return (
    <div className="spinner section-center page-100">
        <div className="spinner-img">
            <img src={spinner} alt="spinner"></img>
        </div>
    </div>
  );
}

export default Loading;
