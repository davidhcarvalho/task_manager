import { ITask } from './../../models/task.model';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  currentDate = new Date();
  tasks: any[];

  constructor(private taskService: TaskService) {
      this.tasks = this.taskService.getTasks();
  }


  deleteTask(id: string) {
    this.taskService.deleteTask(id);
    this.tasks = this.taskService.getTasks();
  }
}
