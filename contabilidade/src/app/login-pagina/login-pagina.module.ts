import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { CadastroComponent } from './cadastro/cadastro.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [InicioComponent, CadastroComponent]
})
export class LoginPaginaModule { }
