import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina-escolhas',
  templateUrl: './pagina-escolhas.component.html',
  styleUrls: ['./pagina-escolhas.component.css']
})
export class PaginaEscolhasComponent implements OnInit {

  constructor(private route: Router, private usuarioService: UsuarioService) { };

  ngOnInit() {
  }

  gastos() {
    this.route.navigate(['/gastos/'])
  }

  id = localStorage.getItem('ID');
  extrato() {
    this.usuarioService.apresentarExtrato(this.id);
    this.route.navigate(['/extrato/'])
  }

  logout() {
    this.route.navigate([''])
  }


}
