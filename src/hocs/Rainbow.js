import React from "react";

const Rainbow = (WrappedComponent) => {
  const colors = ["red", "brown", "black", "blue", "green"];
  const randomColour = colors[Math.floor(Math.random() * 4)];
  //const className = randomColour + "-text";
  return (props) => {
    return (
      <div style={{ color: randomColour }}>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default Rainbow;
