import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreateExpenseDto } from './dto/create-expense.dto'
import { Expense } from './entity/expenses.entity'

@Injectable()
export class ExpensesService {
  constructor(
    @InjectRepository(Expense)
    private expensesRepository: Repository<Expense>
  ) {}

  async findAll(sort: 'asc' | 'desc' = 'desc', limit: number) {
    const [expenses, total] = await this.expensesRepository.findAndCount({
      order: { date: sort.toUpperCase() as 'ASC' | 'DESC' },
      take: limit
    })

    return expenses
  }

  async findOne(id: string) {
    return this.expensesRepository.findOneBy({ id })
  }

  async create(createExpenseDto: CreateExpenseDto) {
    const newExpense = this.expensesRepository.create(createExpenseDto)
    await this.expensesRepository.save(newExpense)
    return newExpense
  }
}
