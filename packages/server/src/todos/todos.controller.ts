import {
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateTodoDTO } from './dtos/create-todo.dto';
import { DeleteTodoDTO } from './dtos/delete-todo.dto';
import { TodoDTO } from './dtos/todo.dto';
import { UpdateTodoDTO } from './dtos/update-todo.dto';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
  private logger = new Logger('TodosController');

  constructor(private todosService: TodosService) {}

  @Get()
  async getTodos(): Promise<TodoDTO[]> {
    return this.todosService.findAll();
  }

  @Post()
  async createTodo(@Body() payload: CreateTodoDTO): Promise<void> {
    await this.todosService.create(payload);
  }

  @Put(':id')
  async updateTodo(
    @Param('id') id: string,
    @Body() payload: UpdateTodoDTO,
  ): Promise<void> {
    await this.todosService.update(id, payload);
  }

  @Delete()
  async deleteTodo(@Body() payload: DeleteTodoDTO): Promise<void> {
    await this.todosService.delete(payload.id);
  }
}
