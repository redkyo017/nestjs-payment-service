import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { PAYMENTS_PROCESS } from '../shared/mocks';
import { PaymentRequestDTO } from './dtos/payment-req.dto';
import { PaymentResponseDTO } from './dtos/payment-res.dto';

@Injectable()
export class PaymentsService {
  processPayment(dto: PaymentRequestDTO): PaymentResponseDTO {
    const paymentResult =
      PAYMENTS_PROCESS[Math.floor(Math.random() * PAYMENTS_PROCESS.length)];
    const { createdAt, createdBy, amount, orderId } = dto;
    const result = Object.assign(
      { createdAt, createdBy, amount, orderId },
      paymentResult,
    );

    return plainToClass(PaymentResponseDTO, result);
  }
}
