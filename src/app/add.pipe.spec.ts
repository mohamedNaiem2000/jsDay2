import { AddPipe } from './Add.pipe';

describe('addPipe', () => {
  const pipe = new AddPipe();
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('test if number is passed return number + number', () => {
    expect(pipe.transform(4)).toBe(8);
  });
})
