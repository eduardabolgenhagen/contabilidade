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
  empresaid = localStorage.getItem('CNPJ');
  

  cadatrarGastos() {
    if (this.titulo != '' && this.valor != '' && this.data != '') {
      this.usuarioService.criarGasto(this.titulo, this.valor, this.data, this.empresaid)
        .then((resultado: any) => {
          alert('Cadastrado com sucesso.')
          console.log(this.titulo, this.valor, this.data)
          this.route.navigate(['/pagina-inicial/']);
        }).catch(erro => {
          console.log('Erro ao buscar usuarios', erro);
        })
    } else{
      alert('É necessário preencher todas as informações!')
    }
  }
}
