import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setData } from "../store/data";

export default function index() {
  const dispatch = useDispatch();
  const stateData = useSelector((state) => state.data.stateData);

  const handleChange = () => {
    dispatch(setData("change text"));
  };
  return (
    <div className="">
      <p>{stateData.data}</p>
      <button onClick={handleChange}>change text</button>
    </div>
  );
}
