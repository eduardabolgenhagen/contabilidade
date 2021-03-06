import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InicioComponent } from './login-pagina/inicio/inicio.component';
import { RouterModule, Routes } from '@angular/router';
import { PaginaEscolhasComponent } from './pagina-inicial/pagina-escolhas/pagina-escolhas.component';
import { PaginaExtratoComponent } from './pagina-inicial/pagina-extrato/pagina-extrato.component';
import { PaginaGastosComponent } from './pagina-inicial/pagina-gastos/pagina-gastos.component';
import { CadastroComponent } from './login-pagina/cadastro/cadastro.component';
import { LoginPaginaModule } from './login-pagina/login-pagina.module';
import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider
} from "angular-6-social-login-v2"
import { CheckLogged } from './CheckLogged';

const routes: Routes = [
  {
    path: '',
    component: InicioComponent,
    canActivate: []
  },
  {
    path: 'pagina-inicial',
    component: PaginaEscolhasComponent,
    canActivate: [CheckLogged]
  },
  {
    path: 'cadastro',
    component: CadastroComponent,
    canActivate: []
  },
  {
    path: 'gastos',
    component: PaginaGastosComponent,
    canActivate: [CheckLogged]
  },
  {
    path: 'extrato',
    component: PaginaExtratoComponent,
    canActivate: [CheckLogged]
  }
]

export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
    [
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider("214907937972-gf4q78bvlr2nhgur0bdlecchcrths7i8.apps.googleusercontent.com"),
      }
    ]
  )
  return config
};

@NgModule({
  declarations: [
    AppComponent,
    PaginaGastosComponent,
    PaginaExtratoComponent,
    PaginaEscolhasComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    LoginPaginaModule,
    SocialLoginModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs,
    },
    CheckLogged
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
