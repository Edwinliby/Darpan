import React from "react";

function Map() {
  return (
    <div className="m-4 md:m-8 xl:mx-20">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.0288770890484!2d76.88864047500186!3d8.59322179145176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bf691d0e4823%3A0x88e2ee192e7b0e0e!2sSt.%20Thomas%20Institute%20for%20Science%20%26%20Technology!5e0!3m2!1sen!2sin!4v1709047396808!5m2!1sen!2sin" 
        width="600" 
        height="450" 
        allowFullScreen="" 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-[30rem] rounded-md map" 
        ></iframe>
    </div>
  );
}

export default Map;
