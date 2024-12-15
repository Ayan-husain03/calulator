import React, { useState } from "react";

export const Calculator = () => {
  const [value, setValue] = useState("");
  const numbers = [
    "7",
    "8",
    "9",
    "+",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "*",
    "0",
    "00",
    "AC",
    "/",
    ".",
    "C",
    "=",
  ];

  const handleClick = (item) => {
    if (item === "AC") {
      setValue("");
    } else if (item === "C") {
      setValue(value.slice(0, -1));
    } else if (item === "=") {
      try {
        setValue(eval(value).toString());
      } catch (error) {
        setValue("Error");
      }
    } else {
      setValue((prev) => prev + item);
    }
  };
  return (
    <div className="calculator">
      <div className="screen">{value || "0"}</div>
      <div className="buttons">
        {numbers.map((item, i) => (
          <button key={i} onClick={() => handleClick(item)}>
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};
