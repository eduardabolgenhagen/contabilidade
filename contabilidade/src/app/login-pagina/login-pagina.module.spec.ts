import { LoginPaginaModule } from './login-pagina.module';

describe('LoginPaginaModule', () => {
  let loginPaginaModule: LoginPaginaModule;

  beforeEach(() => {
    loginPaginaModule = new LoginPaginaModule();
  });

  it('should create an instance', () => {
    expect(loginPaginaModule).toBeTruthy();
  });
});
