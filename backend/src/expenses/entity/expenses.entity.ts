import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class Expense {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  description: string

  @Column('float')
  amount: number

  @Column('date')
  date: Date
}
