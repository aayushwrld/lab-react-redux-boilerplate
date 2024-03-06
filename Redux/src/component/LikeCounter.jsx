import React, { useReducer } from "react";
import { initialValue, Reducer } from "./Reducer";


const LikeCounter = () => {
  const [state, dispatch] = useReducer(Reducer, initialValue);

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };

  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  return (
    <div className="like-counter-container">
      <h1 className="like-counter-heading">{state.count}</h1>
      <button className="like-button" onClick={handleIncrement}>Like</button>
      <button className="unlike-button" onClick={handleDecrement}>Unlike</button>
    </div>
  );
};

export default LikeCounter;
