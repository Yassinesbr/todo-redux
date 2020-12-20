export const add = (item) => {
  return {
    type: "ADD",
    payload: item,
  };
};

export const deleted = (item) => {
  return {
    type: "DELETE",
    payload: item,
  };
};
