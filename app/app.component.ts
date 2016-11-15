import { Component } from '@angular/core';

@Component({
  selector: '.my-app',
  template: ` 1. <digital-clock></digital-clock>
              <br>
              2. <digital-clock highlight></digital-clock>
              <br>
              <br>
              <analog-clock></analog-clock>`,
  providers: []
})
export class AppComponent {

  constructor() {
  }
}

