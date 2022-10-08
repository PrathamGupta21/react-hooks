import React, { useEffect, useState } from "react";

function HookMouse() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  useEffect(() => {
    console.log("Effect called");
    window.addEventListener("mousemove", logMousePosition);
    return () => {
      console.log("Unmounting");
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, []);
  const logMousePosition = (event) => {
    console.log("Mouse event");
    setX(event.clientX);
    setY(event.clientY);
  };
  return (
    <h4>
      X - {x} and Y - {y}
    </h4>
  );
}

export default HookMouse;
