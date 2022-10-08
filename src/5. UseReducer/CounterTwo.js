import React, { useReducer } from "react";

const initialState = {
  firstCounter: 1,
  secondCounter: 5,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        firstCounter: state.firstCounter + action.value,
      };
    case "decrement":
      return {
        ...state,
        firstCounter: state.firstCounter - action.value,
      };
    case "incrementTwo":
      return {
        ...state,
        secondCounter: state.secondCounter + action.value,
      };
    case "decrementTwo":
      return {
        ...state,
        secondCounter: state.secondCounter - action.value,
      };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function CounterTwo() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>{count.firstCounter}</h1>
      <button
        onClick={() => {
          dispatch({ type: "increment", value: 1 });
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrement", value: 1 });
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          dispatch({ type: "reset" });
        }}
      >
        Reset
      </button>
      <h1>{count.secondCounter}</h1>
      <button
        onClick={() => {
          dispatch({ type: "incrementTwo", value: 5 });
        }}
      >
        Increment by 5
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrementTwo", value: 5 });
        }}
      >
        Decrement by 5
      </button>
      <button
        onClick={() => {
          dispatch({ type: "reset" });
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default CounterTwo;
