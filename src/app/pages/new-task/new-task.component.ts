import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { TaskService } from '../../services/task.service';
import { createITask, ITask } from '../../models/task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, HeaderComponent],
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent {
  task: ITask = createITask();

  constructor(private taskService: TaskService, private router: Router) {}

  setCategory(category: string) {
    this.task.category = category;
  }

  saveTask() {
    this.taskService.addTask(this.task);
    this.router.navigate(['/']);
  }
}
