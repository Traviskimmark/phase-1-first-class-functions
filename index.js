function receivesAFunction(callback) {
    callback(); // Call the callback function
  }
  
  function returnsANamedFunction() {
    function namedFunction() {
      console.log("This is a named function.");
    }
  
    return namedFunction;
  }
  
  function returnsAnAnonymousFunction() {
    return function() {
      console.log("This is an anonymous function.");
    };
  }
  
  // Example usage
  receivesAFunction(function() {
    console.log("Callback function called.");
  });
  
  const namedFunc = returnsANamedFunction();
  namedFunc(); // Output: "This is a named function."
  
  const anonymousFunc = returnsAnAnonymousFunction();
  anonymousFunc(); // Output: "This is an anonymous function."
  
