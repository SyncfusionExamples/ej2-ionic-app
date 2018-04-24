import { Component } from '@angular/core';
import  customerData  from './data';
@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  public data: Object[] = customerData;

  constructor() {
  }
}
