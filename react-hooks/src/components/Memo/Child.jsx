import { memo } from "react";

function Child({ prop }) {
  return (
    <div>
      <h1>{prop}</h1>
    </div>
  );
}

//memo here prevents unneccasry rerender of this child component,
//when it is referenced in a parent compoonent
//it will only rerender if prop changes
export default memo(Child);
