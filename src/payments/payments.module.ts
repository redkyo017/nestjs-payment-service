import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AuthorizationMiddleware } from '../middlewares/auth.middleware';
import { PaymentsController } from './payments.controller';
import { PaymentsService } from './payments.service';

@Module({
  controllers: [PaymentsController],
  providers: [PaymentsService]
})
export class PaymentsModule implements NestModule {
  configure(userContext: MiddlewareConsumer){
    userContext
       .apply(AuthorizationMiddleware)
       .forRoutes({path: 'payments', method: RequestMethod.POST})
 }
}
