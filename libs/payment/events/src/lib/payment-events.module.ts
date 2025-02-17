import { Module } from '@nestjs/common';
import { PaymentEventsService } from './payment-events.service';

@Module({
  controllers: [],
  providers: [PaymentEventsService],
  exports: [PaymentEventsService],
})
export class PaymentEventsModule {}
