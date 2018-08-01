import {ApplyPipe, ApplyPurePipe} from './apply.pipe';

describe('ApplyPipe', () => {
  it('create an instance of ApplyPipe()', () => {
    const pipe = new ApplyPipe();
    expect(pipe).toBeTruthy();
  });

  it('create an instance ApplyPurePipe()', () => {
    const pipe = new ApplyPurePipe();
    expect(pipe).toBeTruthy();
  });


  describe('pipe transforms', () => {

    it('should transform values', () => {
      const fn = (value: [string]) => value.findIndex((v) => v === 'winner');
      expect(new ApplyPurePipe().transform(['participant', 'runner-up', 'winner'], fn)).toBe(2);
    });
  }
  );

});
