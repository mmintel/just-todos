import { Inject } from '@nestjs/common';
import { Command, Console } from 'nestjs-console';
import { TodosService } from 'src/todos/todos.service';
import { createTodoSeed } from '../todos/seeds/todo.seeds';

@Console()
export class SeedingService {
  constructor(@Inject(TodosService) private todosService: TodosService) {}

  @Command({
    command: 'seed',
    description: 'Seed DB',
  })
  async seed(): Promise<void> {
    await Promise.all([
      await this.todosService.create(createTodoSeed()),
      await this.todosService.create(createTodoSeed()),
      await this.todosService.create(createTodoSeed()),
      await this.todosService.create(createTodoSeed()),
      await this.todosService.create(createTodoSeed()),
    ]);
  }
}
