import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { TodoList } from './components/todo-list/todo-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, TodoList],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Todo');
}
