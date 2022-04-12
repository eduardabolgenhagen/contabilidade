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
    private usuarioService: UsuarioService) { }

  ngOnInit() {
  }

  cnpj = '';
  razao = '';
  telefone = '';
  nome = '';
  email = '';
  senha = '';

  cadastrarUsuario() {
    this.usuarioService.criarUsuario(this.nome, this.email, this.senha)
      .then((resultado: any) => {
        alert('User cadastrado com sucesso.');
        console.log(this.email, this.senha);
        this.route.navigate(['/']);
      }).catch(erro => {
        console.log('Erro ao criar usuário.', erro);
      })
  }

  cadastrarEmpresa() {
    this.usuarioService.criarEmpresa(this.cnpj, this.razao, this.telefone)
      .then((resultado: any) => {
        alert('Empresa cadastrada com sucesso.')
        console.log(this.cnpj, this.razao, this.telefone)
      }).catch(erro => {
        console.log('Erro ao buscar usuarios', erro);
      })
  }
}




