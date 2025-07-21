import { Component, OnInit } from '@angular/core';
import { UpdateButton } from './components/update-button';
import { TrashButton } from './components/trash-button';
import tdData from '../../test-data/todo';
import { effect } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'td-list',
  imports: [UpdateButton, TrashButton, CommonModule],
  templateUrl: 'todo-list.html',
  styleUrl: 'todo-list.css',
})
export class TodoList implements OnInit {
  data: { text: string; isDone: boolean }[] = [];

  ngOnInit(): void {
    this.data = tdData;
  }
}
