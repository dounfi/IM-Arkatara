import React from "react";

const BackgroundLayer = () => {
  return (
    <div className="fixed inset-0 z-0 bg-gradient-to-br from-primary via-primary to-primary">
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 75% 65% at 58% 42%, rgba(31,54,88,0.4) 0%, transparent 68%),
            radial-gradient(ellipse 55% 45% at 22% 70%, rgba(10,20,40,0.55) 0%, transparent 60%)
          `,
        }}
      />
    </div>
  );
};

export default BackgroundLayer;
