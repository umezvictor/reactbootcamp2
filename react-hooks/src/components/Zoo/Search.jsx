import { memo } from "react";

export default function Search({ onChange: handleChange }) {
  return (
    <div>
      <input type="text" onChange={(e) => handleChange(e.target.value)} />
    </div>
  );
}
