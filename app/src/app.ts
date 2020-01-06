import { SomeService } from './services/Some.service';
import { LogPerformance } from './decorators/LogPerfomance.decorator';

const service: SomeService = new SomeService();
let button: HTMLElement;

button = <HTMLElement>document.getElementById('button');

button.addEventListener("click", () => {
  console.log('button was clicked');
  service.doSomething();
})