import React, { useState } from "react";

const ListBox = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <main className="main">
      <div className="box">
        <button className="btn-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "-" : "+"}
        </button>
        {isOpen && children}
      </div>
    </main>
  );
};

export default ListBox;
