//write the Function Name isEven to check the parameter and check type of them .
//Is the type is number then  return true if parameter mod 2 equal 0 
// then return false 

isEven = (number) => typeof(number) == 'number' ? number%2 === 0 : null



console.log(isEven(2))
console.log(isEven(3))
console.log(isEven(15))