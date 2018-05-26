import { FilterPipe } from './filter.pipe';

describe('FilterPipe', () => {
  it('Iiniciacilizacion del filtro', () => {
    const pipe = new FilterPipe();
    expect(pipe).toBeTruthy();
  });
});
