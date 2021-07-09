
const compose = (...funcs) => (arg) => {
  return funcs.reduceRight((previousValue, currentItem) => currentItem(previousValue), arg);
};

export default compose;