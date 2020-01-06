export function LogPerformance() {

  return function(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {

    const source = descriptor.value;

    descriptor.value = function(...args: any[]) {
      const timeInit = performance.now();
      const executedMethod = source.apply(this, args);
      const timeEnd = performance.now();
      console.log(`Performance time: ${timeEnd - timeInit} ms | method: ${propertyKey}`);
      return executedMethod;
    }
    
    return descriptor;
  }
}