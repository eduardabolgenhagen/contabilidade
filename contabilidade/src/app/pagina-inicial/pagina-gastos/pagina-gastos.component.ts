import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-pagina-gastos',
  templateUrl: './pagina-gastos.component.html',
  styleUrls: ['./pagina-gastos.component.css']
})
export class PaginaGastosComponent implements OnInit {

  constructor( private route: Router,
    private usuarioService : UsuarioService) { }

  ngOnInit() {
  }

  titulo = '';
  data = '';
  valor = '';

  cadatrarGastos(){
    // this.usuarioService.gastos(this.titulo, this.)
    console.log('foi');
  }
  
}
