import { Component, OnInit, signal } from '@angular/core';
import { UpdateButton } from './components/update-button';
import { TrashButton } from './components/trash-button';
import { CommonModule } from '@angular/common';
import tdData from '../../test-data/todo';

@Component({
  selector: 'td-list',
  imports: [UpdateButton, TrashButton, CommonModule],
  templateUrl: 'todo-list.html',
  styleUrl: 'todo-list.css',
})
export class TodoList implements OnInit {
  data = signal<typeof tdData>([]);

  ngOnInit(): void {
    this.data.set(tdData);
  }
}
