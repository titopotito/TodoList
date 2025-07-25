import { Component } from '@angular/core';
import tdData from '../../../test-data/todo';

@Component({
  selector: 'td-header-input',
  template: `<div>
    <input type="text" #inputEl (keydown.enter)="addTodo(inputEl)" />
    <button (click)="addTodo(inputEl)">+</button>
  </div>`,
  styleUrl: 'header-input.css',
})
export class HeaderInput {
  addTodo(inputEl: HTMLInputElement) {
    const todoText = inputEl.value;
    if (todoText === '') return;
    tdData.push({ text: todoText, isDone: false });
    inputEl.value = '';
  }
}
