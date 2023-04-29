import { Component } from '@angular/core';
import { TestServiceService } from './../../service/test-service.service';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})



export class TestComponent {
  constructor(public TestService: TestServiceService ){

  }
  add(x:number,y:number):number{
    return x+y;
  }

}
