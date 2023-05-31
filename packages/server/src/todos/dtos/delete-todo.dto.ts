import { TodoDTO } from './todo.dto';

export type DeleteTodoDTO = Pick<TodoDTO, 'id'>;
