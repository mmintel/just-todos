import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { TodoDTO } from '../dtos/todo.dto';
import { Transform } from 'class-transformer';
import { IsBoolean, IsString } from 'class-validator';
import sanitizeHtml from 'sanitize-html';

@Entity()
export class Todo implements TodoDTO {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @IsString()
  @Column()
  title: string;

  @IsString()
  @Transform(({ value }) => sanitizeHtml(value))
  @Column({ nullable: true })
  description?: string;

  @IsBoolean()
  @Column({ default: false })
  resolved: boolean;
}
