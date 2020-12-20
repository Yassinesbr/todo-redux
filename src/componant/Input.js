import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../actions";

export default function Input() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          dispatch(add(value));
          setValue("");
        }}
      >
        <input
          type="text"
          value={value}
          onChange={(event) => {
            setValue(event.target.value);
          }}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
