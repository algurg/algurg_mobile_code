import { Component } from '@angular/core';

/**
 * Generated class for the NavHeaderComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'nav-header',
  templateUrl: 'nav-header.html'
})
export class NavHeaderComponent {

  text: string;

  constructor() {
    console.log('Hello NavHeaderComponent Component');
    this.text = 'Hello World';
  }

}
