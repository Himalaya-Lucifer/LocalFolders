import { useState } from "react";
import {useSelector,useDispatch} from 'react-redux';
import {increase,decrease} from '../slice/counter.slice';


export default function TextArea({ heading, togglefunction, mode, showAlert }) {
  const [text, setText] = useState("Enter some text to Preview");

  const counter = useSelector((state) => {
    console.log("Thisis",state)
    return state.counter_val.counter;
  });

  const dis = useDispatch();

  const changeText = (event) => {
    setText(event.target.value);
  };

  const handleUpClick = () => {
    console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    showAlert("Success", "Capata;ize is done");
  };

  const handleDownClick = () => {
    console.log("Uppercase was clicked");
    let newText = text.toLocaleLowerCase();
    setText(newText);
    showAlert("Success", "Converted to lowecase");
  };

  return (
    <div
      className="container"
      style={{ color: mode === "light" ? "black" : "white" }}
    >
      <h2>{heading}</h2>
      <div className="mb-4">
        <textarea
          className="form-control mb-4"
          style={{
            color: mode === "light" ? "black" : "white",
            backgroundColor: mode === "light" ? "white" : "gray",
          }}
          id="myBox"
          rows="8"
          value={text}
          onChange={changeText}
        ></textarea>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to upperCase
        </button>
        <button className="btn btn-primary mx-3" onClick={handleDownClick}>
          Convert to upperCase
        </button>
      </div>
      <div
        className="conatainer my-3"
        style={{ color: mode === "light" ? "black" : "white" }}
      >
        <h1>Summary</h1>
        <p>
          {
            text
              .trim()
              .split(" ")
              .filter((elem) => {
                return elem.length !== 0;
              }).length
          }{" "}
          word and {text.trim().length} charcters are there
        </p>
      </div>

      <button
        onClick={() => {
          dis(decrease());
        }}
      >
        -
      </button>
      <div>{counter}</div>
      <button className="mb-5"
        onClick={() => {
          dis(increase());
        }}
      >
        +
      </button>
    </div>
  );
}
