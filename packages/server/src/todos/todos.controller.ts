import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Logger,
  Param,
  Post,
  Put,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Response } from 'express';
import { ApiKeyGuard } from 'src/api-key/api-key.guard';
import { HTTPResult, Result } from 'src/core/Result';
import { CreateTodoDTO } from './dtos/create-todo.dto';
import { TodoDTO } from './dtos/todo.dto';
import { UpdateTodoDTO } from './dtos/update-todo.dto';
import { TodosService } from './todos.service';

@Controller('todos')
@UseGuards(ApiKeyGuard)
export class TodosController {
  private logger = new Logger('TodosController');

  constructor(private todosService: TodosService) {}

  @Get()
  async getTodos(
    @Res({ passthrough: true }) res: Response,
  ): Promise<HTTPResult<TodoDTO[]>> {
    this.logger.log('Getting all TODOs...');
    const todos = await this.todosService.findAll();
    res.status(HttpStatus.OK);
    return Result.ok<TodoDTO[]>(todos);
  }

  @Get(':id')
  async getTodo(
    @Param('id') id: string,
    @Res({ passthrough: true }) res: Response,
  ): Promise<HTTPResult<TodoDTO>> {
    this.logger.log('Getting all TODOs...');
    const todo = await this.todosService.findOne(id);
    res.status(HttpStatus.OK);
    return Result.ok<TodoDTO>(todo);
  }

  @Post()
  async createTodo(
    @Body() payload: CreateTodoDTO,
    @Res({ passthrough: true }) res: Response,
  ): Promise<HTTPResult> {
    this.logger.log('Creating TODO...');
    try {
      const todo = await this.todosService.create(payload);
      this.logger.log('TODO created!');
      this.logger.log(JSON.stringify(todo));
      res.status(HttpStatus.CREATED);
      return Result.ok();
    } catch (e) {
      this.logger.log('TODO could not be created!');
      this.logger.error(e);
      res.status(HttpStatus.INTERNAL_SERVER_ERROR);
      return Result.fail();
    }
  }

  @Put(':id')
  async updateTodo(
    @Param('id') id: string,
    @Body() payload: UpdateTodoDTO,
    @Res({ passthrough: true }) res: Response,
  ): Promise<HTTPResult> {
    this.logger.log('Updating todo:', id);
    try {
      await this.todosService.update(id, payload);
      console.log('Updated todo:', id);
      res.status(HttpStatus.OK);
      return Result.ok();
    } catch (e) {
      this.logger.log('TODO could not be created!');
      this.logger.error(e);
      res.status(HttpStatus.INTERNAL_SERVER_ERROR);
      return Result.fail();
    }
  }

  @Delete(':id')
  async deleteTodo(
    @Param('id') id: string,
    @Res({ passthrough: true }) res: Response,
  ): Promise<HTTPResult> {
    this.logger.log('Deleting todo:', id);
    try {
      await this.todosService.delete(id);
      this.logger.log('Deleted todo:', id);
      res.status(HttpStatus.OK);
      return Result.ok();
    } catch (e) {
      this.logger.log('TODO could not be deleted!');
      this.logger.error(e);
      res.status(HttpStatus.INTERNAL_SERVER_ERROR);
      return Result.fail();
    }
  }
}
