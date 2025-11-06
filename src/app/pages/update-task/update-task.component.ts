import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { TaskService } from '../../services/task.service';
import { ITask } from '../../models/task.model';

@Component({
  selector: 'app-update-task',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, HeaderComponent],
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.scss']
})
export class UpdateTaskComponent implements OnInit {
  task!: ITask;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private taskService: TaskService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    const found = this.taskService.getTaskById(id!);
    if (found) this.task = { ...found };
  }

  setCategory(category: string) {
    this.task.category = category;
  }

  updateTask() {
    this.taskService.updateTask(this.task);
    this.router.navigate(['/']);
  }
}
