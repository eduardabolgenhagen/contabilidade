import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-pagina-gastos',
  templateUrl: './pagina-gastos.component.html',
  styleUrls: ['./pagina-gastos.component.css']
})
export class PaginaGastosComponent implements OnInit {

  constructor(private route: Router,
    private usuarioService: UsuarioService) { }

  ngOnInit() {
  }

  titulo = '';
  valor = '';
  data = '';
  idUser = localStorage.getItem("idUser");

  cadatrarGastos() {
      this.usuarioService.criarGasto(this.titulo, this.valor, this.data, this.idUser)
        .then((resultado: any) => {
          alert('Cadastrado com sucesso.')
          console.log(this.titulo, this.valor, this.data, this.idUser)
          this.route.navigate(['/pagina-inicial/']);
        }).catch(erro => {
          console.log('Erro ao buscar usuarios', erro);
        })
    } 
  }
