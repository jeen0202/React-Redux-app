import './Sidebar.css';
import React from 'react';

export const Sidebar = ({ width, height, children}) =>{
  const [xPosition, setX] = React.useState(-width);

  const toggleMenu = () => {
    if (xPosition < 0) {
      setX(0);
    } else {
      setX(-width);
    }
  };

  React.useEffect(() => {
    setX(0);
  }, []);
  
    return (
        <React.Fragment>
      <div
        className="Sidebar"
        style={{
          transform: `translatex(${xPosition}px)`,
          width: width,
          minHeight: height
        }}
      >
        <button
          onClick={() => toggleMenu()}
          className="toggle-menu"
          style={{
            transform: `translate(${width}px, 30vh)`
          }}
        ></button>
        <div>{children}</div>
      </div>
    </React.Fragment>
    );
  };