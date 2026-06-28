import "./Collapse.css";
import { useState } from "react";

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>
        {title}
      </button>

      {isOpen && <p>{content}</p>}
    </div>
  );
}

export default Collapse;