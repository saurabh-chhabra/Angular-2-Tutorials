import { Component } from '@angular/core';

@Component({
  selector: 'http',
  template: `
            GET :: {{getData}}
            POST :: {{postData}}
  `
})
export class HttpComponent { }
