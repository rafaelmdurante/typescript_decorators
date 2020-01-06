// TODO: Set the default time to be 500 milliseconds
export function Throttle(milliseconds) {

  // TODO: Can you remember the three arguments?
  return function(
    : any, // instance where decorator was applied
    : string,  // name of method
    : PropertyDescriptor // everything from the method
  ) {
    
    // TODO: Make a copy of the original method

    // Set a variable to be the timer
    let timer = 0;
    
    // TODO: Changes original method
    /* Change this line with the function declaration */ {
      // If there is an event in this function
      if (event) {
        // TODO: Prevent its default behaviour
      }
      // Clear timer to prevent the function to be called
      clearInterval(timer);
      // TODO: Set the timer to run the original method after certain amount of time
      // set timer and execute the original method when it's finished
      timer = setTimeout(() => source.apply(this, args), milliseconds);
    }

    return descriptor;
  }
}