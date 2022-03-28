import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaEscolhasComponent } from './pagina-escolhas/pagina-escolhas.component';
import { PaginaGastosComponent } from './pagina-gastos/pagina-gastos.component';
import { PaginaExtratoComponent } from './pagina-extrato/pagina-extrato.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PaginaEscolhasComponent, PaginaGastosComponent, PaginaExtratoComponent, FormsModule]
})
export class PaginaInicialModule { }
