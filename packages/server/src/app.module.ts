import { Module, OnApplicationBootstrap } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosModule } from './todos/todos.module';
import { SeedingService } from './console/seeding.service';
import { Todo } from './todos/entities/todo.entity';
import { ConsoleModule } from 'nestjs-console';

@Module({
  imports: [
    ConsoleModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      port: Number(process.env.POSTGRES_PORT) || 5432,
      host: process.env.POSTGRES_HOST || 'localhost',
      username: process.env.POSTGRES_USERNAME || 'postgres',
      password: process.env.POSTGRES_PASSWORD || 'postgres',
      database: process.env.POSTGRES_DATABASE || 'postgres',
      synchronize: process.env.NODE_ENV !== 'production',
      logging: true,
      entities: [Todo],
      migrations: ['dist/src/db/migrations/*.js'],
    }),
    TodosModule,
  ],
  controllers: [AppController],
  providers: [AppService, SeedingService],
})
export class AppModule implements OnApplicationBootstrap {
  constructor(private readonly seedingService: SeedingService) {}

  async onApplicationBootstrap(): Promise<void> {
    await this.seedingService.seed();
  }
}
