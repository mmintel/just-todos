import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTodoDTO } from './dtos/create-todo.dto';
import { UpdateTodoDTO } from './dtos/update-todo.dto';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo)
    private readonly todosRepository: Repository<Todo>,
  ) {}

  findAll(): Promise<Todo[]> {
    return this.todosRepository.find();
  }

  findOne(id: string): Promise<Todo | null> {
    return this.todosRepository.findOneBy({ id });
  }

  async create(payload: CreateTodoDTO): Promise<void> {
    await this.todosRepository.create(payload);
  }

  async update(id: string, payload: UpdateTodoDTO): Promise<void> {
    await this.todosRepository.update(id, payload);
  }

  async delete(id: string): Promise<void> {
    await this.todosRepository.delete(id);
  }
}
