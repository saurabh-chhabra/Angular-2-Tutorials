import { Component } from '@angular/core';
import { SaurabhComponent } from './component/saurabh.component';
import {ROUTER_DIRECTIVES, Router, Routes} from "@angular/router";


@Component({
  selector: 'my-app',
  template : `<a [routerLink]="['/SaurabhComponent']">Click to go to component 1</a><router-outlet></router-outlet> `,
  directives : [ROUTER_DIRECTIVES]
})

@Routes([
    {path: "/SaurabhComponent", component: SaurabhComponent},
])
export class AppComponent { 
   constructor(private _router: Router) {
        //If you want to use Router in your component (for navigation etc), you can inject it like this
    }

}
