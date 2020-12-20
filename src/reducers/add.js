import { v4 as uuidv4 } from 'uuid';

const addReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD":
      return [...state, { id: uuidv4(), value: action.payload }];

    case "DELETE":
      return state.filter((element) => element.id !== action.payload);

    default:
      return state;
  }
};

export default addReducer;
