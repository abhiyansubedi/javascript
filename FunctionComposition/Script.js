const addTwo = x => x + 2;
const mulByThree = x => x * 3;

const composedFunction = x => mulByThree(addTwo(x))

result = composedFunction(5)

console.log(`result: ${result}`);
