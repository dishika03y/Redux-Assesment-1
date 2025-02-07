import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../redux1/action";

const Counter = () => {
  let count = useSelector((state) => state.count);
  let dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(increment())}>+</button>
      {count}
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
};

export default Counter;
