import { useState, useRef } from "react";

//useref prevents unncessary rerenders
//useref doesn't cause any rerender, but the value is persisted upon rerender
export default function MagicNumber() {
  const magicNumber = 5;
  const secondMagicNumber = 10;

  const [messages, setMessages] = useState({
    p: "",
    button: "Click me until you react the magic number",
  });
  //const [count, setCount] = useState(0);

  const count = useRef(0);

  const handleClick = () => {
    count.current = count.current + 1;
    if (count.current === magicNumber) {
      setMessages({
        p: "You reached it",
        button: "Click me until you react the second magic number",
      });
    } else if (count.current === secondMagicNumber) {
      setMessages({
        p: "You reached it again",
        button: "Stop clicking me",
      });
    }
    //setCount(newCount);
  };
  return (
    <div>
      {messages.p && <p>{messages.p}</p>}
      <button onClick={handleClick}>{messages.button}</button>
    </div>
  );
}
