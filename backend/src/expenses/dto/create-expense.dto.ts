import { Type } from 'class-transformer'
import { IsDate, IsNumber, IsPositive, IsString } from 'class-validator'

export class CreateExpenseDto {
  @IsString()
  description: string

  @IsNumber()
  @IsPositive()
  amount: number

  @IsDate()
  @Type(() => Date)
  date: Date
}
