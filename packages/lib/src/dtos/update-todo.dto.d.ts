import { TodoDTO } from './todo.dto';
export type UpdateTodoDTO = Omit<TodoDTO, 'id'>;
