export interface ITask {
  id: string;
  name: string;
  date: string;
  priority: string;
  category: string;
}

export function createITask(): ITask {
  return {
    id: '',
    name: '',
    date: '',
    priority: 'Baixo',
    category: ''
  };
}