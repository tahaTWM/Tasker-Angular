import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../Task';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = [];

  constructor(private taskServices: TaskService) { }

  ngOnInit(): void {
    this.taskServices.getTasks().subscribe((taks) => (
      this.tasks = taks
    ));
  }

  deleteTask(task: Task) {
    this.taskServices.deleteTaskServers(task).subscribe(() => (
      this.tasks = this.tasks.filter(t => t.id != task.id)
    ));
  }
  addTask(task: Task) {
    this.taskServices.addTask(task).subscribe((taks) => (this.tasks.push(task)));
  }
  toggleReminder(task: Task) {
    task.reminder = !task.reminder;
    this.taskServices.updateTaskReminder(task).subscribe();
  }
}
