const sumNumbers = (nums) => {
    return nums.reduce((sum, num) => sum + num, 0);
  };
  
  const multiplyNumbers = (nums) => {
    return nums.reduce((product, num) => product * num, 1);
  };
  
  module.exports = { sumNumbers, multiplyNumbers };
  