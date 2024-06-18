import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { PaymentRequestDTO } from './dtos/payment-req.dto';
import { PaymentResponseDTO } from './dtos/payment-res.dto';
import { PaymentsService } from './payments.service';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentService: PaymentsService) {}
  
  @Post()
  @HttpCode(HttpStatus.OK)
  async addPayment(@Body() dto: PaymentRequestDTO): Promise<PaymentResponseDTO>{
    const res = await this.paymentService.processPayment(dto)
    return res 
  }
}
