import { BuiltInPipe } from './built-in.pipe';

describe('BuiltInPipe', () => {
  it('create an instance', () => {
    const pipe = new BuiltInPipe();
    expect(pipe).toBeTruthy();
  });
});
