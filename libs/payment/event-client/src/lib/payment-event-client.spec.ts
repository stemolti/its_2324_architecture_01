import { paymentEventClient } from './payment-event-client';

describe('paymentEventClient', () => {
  it('should work', () => {
    expect(paymentEventClient()).toEqual('payment-event-client');
  });
});
