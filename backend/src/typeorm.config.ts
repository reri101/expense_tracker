import { TypeOrmModuleOptions } from '@nestjs/typeorm'
import { Expense } from './expenses/entity/expenses.entity'

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgresql',
  database: 'expenses_db',
  entities: [Expense],
  synchronize: true,
  logging: true
}
