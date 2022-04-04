import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(private route: Router,
    private usuarioService : UsuarioService) { }
    
  ngOnInit() {
  }

  cnpj = '';
  razao = '';
  telefone = '';
  nome = '';
  email = '';
  senha = '';
  empresaid = localStorage.getItem('CNPJ');

  cadatrarEmpresa() {
    if (this.cnpj != '' && this.razao != '' && this.telefone != '') {
      this.usuarioService.criarEmpresa(this.cnpj, this.razao, this.telefone)
        .then((resultado: any) => {
          alert('Cadastrado com sucesso.')
          console.log(this.cnpj, this.razao, this.telefone)
          this.route.navigate(['/pagina-inicial/']);
        }).catch(erro => {
          console.log('Erro ao buscar usuarios', erro);
        })
    } else{
      alert('É necessário preencher todas as informações!')
    }
  }

  cadastrarUsuario() {
    if (this.nome != '' && this.email != '' && this.senha != ''){
      this.usuarioService.criarUsuario(this.nome, this.email, this.senha, this.empresaid)
      .then((resultado: any) => {
        alert('Cadastrado com sucesso.')
        console.log(this.nome, this.empresaid)
      }).catch(erro => {
        console.log('Erro ao criar usuário.', erro)
      })
    } else {
      alert('É necessário preencher todos os campos!')
    }
  }

}


