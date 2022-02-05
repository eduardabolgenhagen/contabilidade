import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InicioComponent } from './login-pagina/inicio/inicio.component';
import { RouterModule , Routes} from '@angular/router';
import { PaginaEscolhasComponent } from './pagina-inicial/pagina-escolhas/pagina-escolhas.component';
import { PaginaExtratoComponent } from './pagina-inicial/pagina-extrato/pagina-extrato.component';
import { PaginaGastosComponent } from './pagina-inicial/pagina-gastos/pagina-gastos.component';

const routes: Routes=[
  {
    path:'',
    component: InicioComponent,
    canActivate:[]
  },
  {
    path:'pagina-inicial',
    component: PaginaEscolhasComponent,
    canActivate:[]
  },
  {
    path:'gastos',
    component: PaginaGastosComponent,
    canActivate:[]
  },
  {
    path:'extrato',
    component: PaginaExtratoComponent,
    canActivate:[]
  }
]

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    PaginaEscolhasComponent,
    PaginaGastosComponent,
    PaginaExtratoComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
