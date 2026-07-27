import { describe, it, expect } from 'vitest';
import { CreditLabelPipe } from './credit-label-pipe';

describe('CreditLabelPipe', () => {
  it('create an instance', () => {
    const pipe = new CreditLabelPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return "4 Credits" for 4', () => {
    const pipe = new CreditLabelPipe();
    expect(pipe.transform(4)).toBe('4 Credits');
  });

  it('should return "1 Credit" for 1', () => {
    const pipe = new CreditLabelPipe();
    expect(pipe.transform(1)).toBe('1 Credit');
  });
});
