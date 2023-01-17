import React, { useState } from "react";

const Questions = () => {
  const [checked, setChecked] = useState(undefined);
  function onSelect() {
    console.log("radio button selected");
  }
  return (
    <div className="questions">
      <h2 className="text-light"> Simple Question 1</h2>
      <ul>
        <li>
          <input
            type="radio"
            value={checked}
            name="options"
            id="q1-option"
            onChange={onSelect()}
          />
          <label className="text-primary" htmlFor="q1-option">
            option
          </label>
          <div className="check checked"></div>
        </li>
      </ul>
    </div>
  );
};

export default Questions;
