export function Throttle(milliseconds = 500) {

  return function(
    target: any, // instance where decorator was applied
    propertyKey: string,  // name of method
    descriptor: PropertyDescriptor // everything from method
  ) {
    // copy of the original method
    const source = descriptor.value;
    let timer = 0;
    // changes the original method
    descriptor.value = function(...args: any[]) {
      // TypeScript detects there is an event and prevent default behaviour
      if (event) {
        event.preventDefault();
      }
      // clear timer to prevent the function to be called over and over
      clearInterval(timer);
      // set timer and execute method when finished
      timer = setTimeout(() => source.apply(this, args), milliseconds);
    }
    
    return descriptor;
  }
}