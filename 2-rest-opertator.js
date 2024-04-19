import _ from 'lodash';

// BEGIN
const average = (...args) => {
    if (args.length === 0) {
      return null;
    }
    const sum = _.sum(args);
    return sum / args.length;
  };
  
  export default average;
// END