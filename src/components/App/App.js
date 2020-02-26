import React, { useState } from "react";
import "./App.css";
import InputComponent from "../InputComponent/InputComponent.js";
import ListComponent from "../ListComponent/ListComponent.js";

// Import useState to App ✅
// Initialize state for list, and have it be an array ✅
// Initialize state for input field ✅
// Make input component ✅
// Have input state handed down from App ✅
// Make input field ✅
// Make button ✅
// Set onclick of button to be the state change function for adding to list array ✅
// Have input field linked to app so it renders ✅
// Make List component ✅
// Have list state handed down from App ✅
// Make list item component ✅
// Make clear all button or component ✅
// Have it delete list array and make new array ✅
// Display app components in App so they render ✅
// Make input field clear when submit is clicked ✅
// Make button round and gray with white text ✅
// Make input field round borders ✅
// Make list items have a shopping trolley icon ✅
// Make trolley icon be near text not off to the left ✅
// Change page background to have a gray to white radial gradient ✅
// Make Clear list button styled ✅
// Refactor by using state for the input field ✅

function App() {
  const [listArray, setListArray] = useState([]);
  const [inputText, setInputText] = useState("");

  function addToList() {
    if (!listArray.includes(inputText)) {
      setListArray([...listArray, inputText]);
    } else {
      alert("That item is in the list already!");
    }
    setInputText("");
  }

  function clearList() {
    setListArray([]);
  }

  function changeInputText(e) {
    setInputText(e.target.value);
  }

  return (
    <div className="App">
      <header>
        <h1>The shopping list app</h1>
      </header>
      <InputComponent
        addToList={addToList}
        changeInputText={changeInputText}
        inputText={inputText}
      />
      <ListComponent listArray={listArray} />
      <button id="clear-button" onClick={clearList}>
        Clear the whole list?
      </button>
    </div>
  );
}

export default App;
