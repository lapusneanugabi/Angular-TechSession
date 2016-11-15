import { Component } from '@angular/core';

@Component({
  selector: '.my-app',
  template: ` 1. <digital-clock highlight></digital-clock> 
              <br> 
              2. <digital-clock></digital-clock>
              <br>
              3. <analog-clock></analog-clock>`,
  providers: []
})
export class AppComponent { 

  constructor() {
  }
}

