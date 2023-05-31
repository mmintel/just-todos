import { faker } from '@faker-js/faker';
import { CreateTodoDTO } from '../dtos/create-todo.dto';

export function createTodoSeed(): CreateTodoDTO {
  return {
    title: faker.lorem.words(8),
    description: faker.lorem.paragraph(6),
    resolved: faker.datatype.boolean(),
  };
}
