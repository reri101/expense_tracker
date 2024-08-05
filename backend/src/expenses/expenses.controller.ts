import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Query,
  UseGuards,
  ValidationPipe
} from '@nestjs/common'
import { ExpensesService } from './expenses.service'
import { CreateExpenseDto } from './dto/create-expense.dto'
import { IsPositivePipe } from 'src/pipes/is-positive.pipe'
import { ApiKeyGuard } from 'src/guards/api-key.guard'

@Controller('expenses')
export class ExpensesController {
  constructor(private expensesService: ExpensesService) {}

  @Get()
  findAll(
    @Query('sort') sort: 'asc' | 'desc' = 'desc',
    @Query('limit', new DefaultValuePipe(100), ParseIntPipe, IsPositivePipe)
    limit: number
  ) {
    return this.expensesService.findAll(sort, limit)
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const expense = await this.expensesService.findOne(id)
    if (!expense) {
      throw new HttpException('Expense not found', HttpStatus.NOT_FOUND)
    }
    return expense
  }

  @UseGuards(ApiKeyGuard)
  @Post()
  create(@Body(ValidationPipe) input: CreateExpenseDto) {
    return this.expensesService.create(input)
  }
}
