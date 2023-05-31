import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { TodoDTO } from '../dtos/todo.dto';

@Entity()
export class Todo implements TodoDTO {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  description?: string;

  @Column({ default: false })
  resolved: boolean;
}
