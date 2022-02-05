import { PaginaInicialModule } from './pagina-inicial.module';

describe('PaginaInicialModule', () => {
  let paginaInicialModule: PaginaInicialModule;

  beforeEach(() => {
    paginaInicialModule = new PaginaInicialModule();
  });

  it('should create an instance', () => {
    expect(paginaInicialModule).toBeTruthy();
  });
});
