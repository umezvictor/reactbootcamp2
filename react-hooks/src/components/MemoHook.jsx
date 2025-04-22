import { useState, useMemo } from "react";

export default function MemoHook() {
  const [text, setText] = useState("");
  const [person, setPerson] = useState("");

  const isPersonCoolFunc = () => {
    //long running task, it could be an api call that takes time
    for (let i = 0; i < 1000000000; i++) {}

    //operation after long running task
    //usememo memoizes the return value

    if (person === "Chibuzor") return "cool guy";
    else if (person === "Blessing") return "very cool";
    else if (person === "Obinna") return "moderately cool";
    else return "";
  };

  //usememo memoizes or memorizes the return value if the function above
  //hence improving performance
  //it is used when you have a loong running task that can slow down
  //ui renders, or user inputs, etc. it prevents that long running task from slowing down other user functions
  //user can still interact or type while the long task runs

  //what this does is that, if the value of person does not change, it won't call the isPersonCoolFunc function again
  //it will assign the return value to isPersonCool variable
  const isPersonCool = useMemo(isPersonCoolFunc, [person]);

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div>
        <button onClick={() => setPerson("Chibuzor")}>Victor</button>
        <button onClick={() => setPerson("Blessing")}>Chinenye</button>
        <button onClick={() => setPerson("Obinna")}>Tboy</button>
      </div>
      <p>{isPersonCool}</p>
    </div>
  );
}
