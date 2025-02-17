import { paymentConfig } from './payment-config';

describe('paymentConfig', () => {
  it('should work', () => {
    expect(paymentConfig()).toEqual('payment-config');
  });
});
