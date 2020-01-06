import { Throttle } from "../decorators/Throttle.decorator";
import { LogPerformance } from "../decorators/LogPerfomance.decorator";

export class SomeService {
  
  @Throttle()
  public doSomething(): void {
    console.log('A request was sent to the server');
  }

}