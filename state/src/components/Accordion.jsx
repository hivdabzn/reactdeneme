import { useState } from "react";

const Accordion = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white text-black m-3 rounded-3 p-4 border shadow">
      <div className="d-flex align-items-center justify-content-between border-bottom p-2 mb-2">
        <h3>{props.title}</h3>

        <button onClick={() => setIsOpen(!isOpen)} className="btn btn-dark">
          {isOpen ? "X" : "+"}
        </button>
      </div>
      {isOpen && (
        <div>
          <p>{props.text}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
