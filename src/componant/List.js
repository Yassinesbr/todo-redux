import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleted } from "../actions";

export default function List() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.addReducer);

  return (
    <div>
      {state.map((element) => {
        return (
          <p key={element.id}>
            <button
              onClick={() => {
                dispatch(deleted(element.id));
              }}
            >
              Delete
            </button>{" "}
            {element.value}
          </p>
        );
      })}
    </div>
  );
}
