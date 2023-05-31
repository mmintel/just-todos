import { Module, OnApplicationBootstrap } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConsoleModule } from 'nestjs-console';
import { SeedingService } from 'src/console/seeding.service';
import { Todo } from 'src/todos/entities/todo.entity';
import { TodosModule } from 'src/todos/todos.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConsoleModule,
    ConfigModule.forRoot({
      envFilePath: ['../../.env'],
    }),
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
export class AppModule {}
