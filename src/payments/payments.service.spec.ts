import { Test, TestingModule } from '@nestjs/testing';
import { PaymentRequestDTO } from './dtos/payment-req.dto';
import { PaymentsService } from './payments.service';

describe('PaymentsService', () => {
  let service: PaymentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PaymentsService],
    }).compile();

    service = module.get<PaymentsService>(PaymentsService);
  });

  it('processPayment', () => {
    const dto = new PaymentRequestDTO()
    dto.createdAt = new Date(Date.now())
    dto.createdBy = 0
    dto.amount = 5000
    dto.orderId = 1
    const result = service.processPayment(dto);

    expect(result).not.toBeNull();
  });
});
