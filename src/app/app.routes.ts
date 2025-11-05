import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NewTaskComponent } from './pages/new-task/new-task.component';
import { UpdateTaskComponent } from './pages/update-task/update-task.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'new-task', component: NewTaskComponent },
  { path: 'update-task', component: UpdateTaskComponent }
];
