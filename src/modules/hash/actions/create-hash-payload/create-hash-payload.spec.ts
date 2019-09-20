import { createCreateHashPayload } from './create-hash-payload';

describe('Create Hash Payload', () => {
  it('should contain the timestamp at the start of the payload', () => {
    const result = createDummyHashPayload({ timestamp: '2019-09-09T09:09:09.999Z' });
    expect(result.startsWith('2019-09-09T09:09:09.999Z')).toBeTruthy();
  });

  it('should contain the previous hash at the middle of the payload', () => {
    const result = createDummyHashPayload({ previousHash: 'testHash' });
    expect(result.includes('testHash')).toBeTruthy();
  });

  it('should contain the stringified data at the end of the payload', () => {
    const result = createDummyHashPayload({ data: { testKey: 'testValue' } });
    expect(result.endsWith('{"testKey":"testValue"}')).toBeTruthy();
  });

  it('should separate the three different payload sections with # character', () => {
    const result = createDummyHashPayload();
    expect(result.split('#').length).toEqual(3);
  });
});

function createDummyHashPayload(override: { data?: object; previousHash?: string; timestamp?: string } = {}): string {
  const params = {
    data: { testKey: 'testValue' },
    previousHash: 'testHash',
    timestamp: '2019-09-09T09:09:09.999Z',
    ...override,
  };
  return createCreateHashPayload()(params.data, params.previousHash, params.timestamp);
}
