import { Component, input } from '@angular/core';
import tdData from '../../../test-data/todo';

@Component({
  selector: 'td-trash-btn',
  template:
    '<button (click)="deleteTodo()"><i class="fa-solid fa-trash"></i></button>',
  styleUrl: 'trash-button.css',
})
export class TrashButton {
  index = input.required<number>();

  deleteTodo() {
    tdData.splice(this.index(), 1);
  }
}
