export function LogPerformance() {

  /**
   * You might use a debugger to help understand what's inside
   * each argument of the following function
   */
  return function(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    // TODO: Save a copy of the original function
    const source;

    // Change the original function
    descriptor.value = function(...args: any[]) {
      // Get the exact time in milliseconds when method starts
      const timeInit = performance.now();
      // Run the original method
      const executedMethod = source.apply(this, args);
      // TODO: Get the exact time when the action was finished
      // TODO: Print the time difference in milliseconds with the name of the original function
      console.log(`Performance time: ${} ms | method: ${}`);
      // Return the executed method
      return executedMethod;
    }
    // Return everything
    return descriptor;
  }
}