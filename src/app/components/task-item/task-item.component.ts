import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task'
import { faE, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Input() task!: Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  faCoffee = faTimes;
  faEdit = faEdit;

  constructor() { }

  ngOnInit(): void {
  }

  deleteTask(task: Task) {
    this.onDeleteTask.emit(task);
  }

}
