import { Test, TestingModule } from '@nestjs/testing'
import { ExpensesController } from '../expenses/expenses.controller'
import { ExpensesService } from '../expenses/expenses.service'

describe('ExpensesController', () => {
  let controller: ExpensesController

  const mockFindOne = jest.fn()

  const mockExpensesService = {
    findAll: async () => [{ id: 'id' }],
    findOne: mockFindOne,
    create: async () => ({ id: 'id' })
  }

  beforeEach(async () => {
    jest.resetAllMocks()
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExpensesController],
      providers: [{ provide: ExpensesService, useValue: mockExpensesService }]
    }).compile()

    controller = module.get<ExpensesController>(ExpensesController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })

  describe('findOne', () => {
    describe('when expense is found', () => {
      const expenseId = 'id'
      const mockResult = { id: expenseId, description: 'test expense' }

      beforeEach(() => {
        mockFindOne.mockResolvedValue(mockResult)
      })

      it('should call the service with correct params', async () => {
        await controller.findOne(expenseId)
        expect(mockFindOne).toHaveBeenCalledWith(expenseId)
      })

      it('should return correct response', async () => {
        const result = await controller.findOne(expenseId)
        expect(result).toEqual(mockResult)
      })
    })

    describe('when expense is not found', () => {
      const expenseId = 'id2'

      beforeEach(() => {
        mockFindOne.mockResolvedValue(null)
      })

      it('should throw an error', async () => {
        await expect(controller.findOne(expenseId)).rejects.toThrow(
          'Expense not found'
        )
      })
    })
  })
})
