import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-pagina-extrato',
  templateUrl: './pagina-extrato.component.html',
  styleUrls: ['./pagina-extrato.component.css']
})
export class PaginaExtratoComponent implements OnInit {

  constructor(private route: Router, private usuarioService: UsuarioService) { }

  listaGastos = [];

  id = localStorage.getItem('ID');

  ngOnInit() {
    this.usuarioService.apresentarExtrato(this.id)
      .then((resultado: any) => {
        this.listaGastos = resultado;
        console.log(this.listaGastos)
      })
  }

}
