import { TodoDTO } from './todo.dto';

export type CreateTodoDTO = Omit<TodoDTO, 'id'>;
