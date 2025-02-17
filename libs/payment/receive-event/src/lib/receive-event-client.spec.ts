import { receiveEventClient } from './receive-event-client';

describe('receiveEventClient', () => {
  it('should work', () => {
    expect(receiveEventClient()).toEqual('receive-event-client');
  });
});
