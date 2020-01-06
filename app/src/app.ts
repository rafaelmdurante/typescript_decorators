import { SomeService } from './services/Some.service';

const service: SomeService = new SomeService();
let button;

button = document.getElementById('button');

button.addEventListener("click", () => {
  console.log('button was clicked');
  service.doSomething();
})