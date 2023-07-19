export const generateFibonacci = (n) => {
  let x = 1;
  let y = 1;
  let sequence = [x, y];

  Array(n)
    .fill()
    .forEach(() => {
      let sum = x + y;
      sequence.push(sum);
      x = y;
      y = sum;
    });

  return sequence;
};
