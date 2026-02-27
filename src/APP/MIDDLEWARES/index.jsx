export const logger = (store) => (next) => (action) => {
  console.log(action);
  next(action);
};

export const featuring = (store) => (next) => (actioninfo) => {
  const featured = [{ name: "eddie" }, ...actioninfo.action.payload];
  const updateActionInfo = {
    ...actioninfo,
    action: { ...actioninfo.action, payload: featured },
  };
  console.log(updateActionInfo);
  next(updateActionInfo);
};
