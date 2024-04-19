const takeLast = (text, n) => {
  if (text === '' || text.length < n) {
      return null;
  }
  return text.slice(-n).split('').reverse().join('');
};
const run = (text) => {
    // BEGIN

    // END
  
    return takeLast(text, 4);
  };
  
export default run;