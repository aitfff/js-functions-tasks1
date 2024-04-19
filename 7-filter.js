// BEGIN
const getFemaleFriends = (users) => users
  .map(user => user.friends)
  .flat()
  .filter(friend => friend.gender === 'female');

export default getFemaleFriends;
// END