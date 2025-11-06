import { Injectable } from '@angular/core';
import { ITask } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: ITask[] = [];
  private storageKey = 'angularTasks';

  constructor() {
    this.loadTasks();
  }

  private generateUniqueId(): string {
    return Math.random().toString(36).substring(2, 9) + Date.now().toString(36);
  }

  private loadTasks(): void {
    const data = localStorage.getItem(this.storageKey);
    if (data) {
      this.tasks = JSON.parse(data);
    }
  }

  private saveTasks(): void {
    localStorage.setItem(this.storageKey, JSON.stringify(this.tasks));
  }

  public getTasks(): ITask[] {
    return this.tasks;
  }

  public getTaskById(id: string): ITask | undefined {
    return this.tasks.find(t => t.id === id);
  }

  public addTask(task: ITask): void {
    task.id = this.generateUniqueId();
    this.tasks.push(task);
    this.saveTasks();
  }

  public updateTask(updatedTask: ITask): void {
    const index = this.tasks.findIndex(t => t.id === updatedTask.id);
    if (index !== -1) {
      this.tasks[index] = updatedTask;
      this.saveTasks();
    }
  }

  public deleteTask(id: string): void {
    this.tasks = this.tasks.filter(t => t.id !== id);
    this.saveTasks();
  }
}
