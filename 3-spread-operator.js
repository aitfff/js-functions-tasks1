// BEGIN
const convert = (...dates) => {
    if (dates.length === 0) {
    return [];
    }
    
    const result = dates.map(dateArray => {
    const [year, month, day] = dateArray;
    const dateString = new Date(year, month, day).toDateString();
    return dateString;
    });
    
    return result;
    };
    
    export default convert;
// END