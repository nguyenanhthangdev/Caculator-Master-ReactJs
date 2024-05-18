import React from "react";
import "./DisplayStyle.css";

const Display = ({ input, answer }) => {
  return (
    <div className="display">
      {answer === "" ? (
        <input
          type="text"
          name="input"
          className="input"
          style={{ padding: "29px" }}
          value={input}
          placeholder="0"
          maxLength={12}
          readOnly
          disabled
        />
      ) : (
        <>
          <input
            type="text"
            name="input"
            className="value"
            value={input}
            placeholder="0"
            maxLength={12}
            readOnly
            disabled
          />
          <input
            type="text"
            name="value"
            className="input"
            value={answer}
            readOnly
            disabled
          />
        </>
      )}
    </div>
  );
};

export default Display;
