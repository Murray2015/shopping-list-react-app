import React from "react";
import "./InputComponent.css";

function InputComponent({ addToList, changeInputText, inputText }) {
  return (
    <div>
      <input
        type="text"
        size="32"
        placeholder="What do you want to add to your list?"
        id="list-input"
        onChange={changeInputText}
        value={inputText}
      ></input>
      <button id="input-button" onClick={addToList}>
        Add to list
      </button>
    </div>
  );
}

export default InputComponent;
