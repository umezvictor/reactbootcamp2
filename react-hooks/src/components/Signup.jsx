import { useEffect, useRef, useState } from "react";

export default function Signup() {
  const [email, setEmail] = useState("");
  //useredf can be used to reference jsx element

  //alwayts initialise to null when referencing jsx elements
  const inputElement = useRef(null);
  const handleClick = () => {
    if (!email) {
      inputElement.current.style.border = "5px solid red";
      inputElement.current.focus();
    }
  };

  useEffect(() => {
    if (email) {
      inputElement.current.style.border = "none";
    }
  }, [email]);

  return (
    <div>
      <input
        ref={inputElement}
        type="email"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleClick}>Signup</button>
    </div>
  );
}
