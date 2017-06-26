import { Component } from '@angular/core';
import { SaurabhComponent } from './component/saurabh.component';

@Component({
  selector: 'my-app',
  templateUrl : 'views/app.html',
  directives : [SaurabhComponent]
})
export class AppComponent { }
