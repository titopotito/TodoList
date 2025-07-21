import { Component } from '@angular/core';

@Component({
  selector: 'td-header-input',
  template: `<div>
    <input type="text" />
    <button>+</button>
  </div>`,
  styleUrl: 'header-input.css',
})
export class HeaderInput {}
