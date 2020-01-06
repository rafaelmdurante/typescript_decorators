# Proposed Workflow

  * Clone branch `hands-on`
  * Checkout to a new branch
  * Perform the tasks from `<branch> hands-on/HANDS_ON.md`.

# Proposed Solutions

1. Open `<project>/package.json`:
	```json
	"start": "npm run watch | npm run serve"
	```

2. On terminal
	```bash
	<project-root> $ npm install typescript@3.7.4
	```

3. Open `<project>/app.ts`
	```typescript
	let button: HTMLElement;
	
	button = <HTMLElement>document.getElementById('button');
	```

4. For the LogPerformance do the following:
	* Open `<project>/src/decorators/LogPerformance.decorator.ts`:
		```typescript
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
		```
	
	* Import and use the decorator on `<project>/app/src/services/Some.service.ts`:
		```typescript
		import { LogPerformance } from  '../decorators/LogPerformance.decorator';
		
		@LogPerformance()
		public doSomething(): void { ... }
		```

5. Implement the Throttle decorator:
	* Open `<project>/src/decorators/Throttle.decorator.ts`:
		```typescript
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
		```
   
	* Import and use the decorator on `<project>/app/src/services/Some.service.ts`:
		```typescript
		import { Throttle } from "../decorators/Throttle.decorator";
		
		@Throttle( [optional param] )
		public doSomething(): void { ... }
		```