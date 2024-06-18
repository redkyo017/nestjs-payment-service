import { HttpService } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { PaymentRequestDTO } from './dtos/payment-req.dto';
import { PaymentsController } from './payments.controller';
import { PaymentsService } from './payments.service';

describe('Payments Controller', () => {
  let controller: PaymentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PaymentsService],
      controllers: [PaymentsController],
    }).compile();

    controller = module.get<PaymentsController>(PaymentsController);
  });

  it('process payment controller',async () => {
    const dto = new PaymentRequestDTO();
    dto.createdAt = new Date(Date.now());
    dto.createdBy = 0;
    dto.amount = 5000;
    dto.orderId = 1;
    const result = await controller.addPayment(dto);
    expect(result).not.toBeNull();
    expect(result.orderId).toEqual(dto.orderId);
    expect(result.status).not.toBeNull();
  });
});
