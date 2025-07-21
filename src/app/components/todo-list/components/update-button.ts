import { Component, input } from '@angular/core';
import tdData from '../../../test-data/todo';

@Component({
  selector: 'td-update-btn',
  template:
    '<button (click)="updateTodo()"><i class="fa-solid fa-pen"></i></button>',
  styleUrl: 'update-button.css',
})
export class UpdateButton {
  index = input.required<number>();

  updateTodo() {
    tdData[this.index()].isDone = !tdData[this.index()].isDone;
  }
}
