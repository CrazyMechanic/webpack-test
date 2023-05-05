// import _ from 'lodash';

// const numbers = [1, 5, 5, 5, 8, 10, 1, 1, 1, 5, 15, 42, 5];
// const uniqNumbers = _.uniq(numbers);

// console.log('Lodash uniq:', uniqNumbers);
// console.log('Lodash random:', _.random(0, 100, false));

import('lodash').then((_) => {
  const numbers = [1, 5, 5, 5, 8, 10, 1, 1, 1, 5, 15, 42, 5];
  const uniqNumbers = _.uniq(numbers);

  console.log('Lodash uniq:', uniqNumbers);
  console.log('Lodash random:', _.random(0, 100, false));
});

