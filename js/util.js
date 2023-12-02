const randomiseNumber = (minNumber, maxNumber) => {
  if (minNumber < 0 || maxNumber < 0) {
    return -1;
  }

  if (minNumber > maxNumber) {
    [minNumber, maxNumber] = [maxNumber, minNumber];
  }

  return Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
};

const isEscapeKey = (evt) => evt.key === 'Escape';

export{randomiseNumber, isEscapeKey};
