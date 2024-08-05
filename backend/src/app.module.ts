import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ExpensesModule } from './expenses/expenses.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import { typeOrmConfig } from './typeorm.config'

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), ExpensesModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
