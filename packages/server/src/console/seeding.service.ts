import { Inject, Logger } from '@nestjs/common';
import { Command, Console } from 'nestjs-console';
import { TodosService } from 'src/todos/todos.service';
import { createTodoSeed } from '../todos/seeds/todo.seeds';

@Console()
export class SeedingService {
  private logger = new Logger('SeedingService');
  constructor(@Inject(TodosService) private todosService: TodosService) {}

  @Command({
    command: 'seed',
    description: 'Seed DB',
  })
  async seed(): Promise<void> {
    this.logger.log('Seeding TODOs...');
    try {
      await Promise.all([
        this.todosService.create(createTodoSeed()),
        this.todosService.create(createTodoSeed()),
        this.todosService.create(createTodoSeed()),
        this.todosService.create(createTodoSeed()),
        this.todosService.create(createTodoSeed()),
      ]);
      this.logger.log('Todos seeded successfully.');
    } catch {
      this.logger.error('Seeding TODOs failed.');
    }
  }
}
