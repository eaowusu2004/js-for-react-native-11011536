function processArray(arr) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
      const num = arr[i];
      if (num % 2 === 0) {
        newArr.push(num * num);
      } else {
        newArr.push(num * 3);
      }
    }
    return newArr;
  }
  
  function formatArrayStrings(stringArr, processedNumbers) {
    if (stringArr.length !== processedNumbers.length) {
      throw new Error("Input arrays must have the same length");
    }
  
    return stringArr.map((str, index) => {
      const num = processedNumbers[index];
      return num % 2 === 0 ? str.toUpperCase() : str.toLowerCase();
    });
  }
  
  // Sample data for demonstration
  const numberArray = [1, 4, 3, 6];
  const stringArray = ["apple", "banana", "cherry", "date"];
  
  // Process the numbers
  const processedNumbers = processArray(numberArray);
  
  // Format the strings based on processed numbers
  const formattedNames = formatArrayStrings(stringArray, processedNumbers);
  
  console.log("Processed Numbers:", processedNumbers);
  console.log("Formatted Names:", formattedNames);