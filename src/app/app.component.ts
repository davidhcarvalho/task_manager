import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskService } from '../app/services/task.service'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TaskService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'task-list-ng';
}
