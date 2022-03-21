import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import {
  AuthService,
  GoogleLoginProvider,
} from 'angular-6-social-login-v2';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})

export class InicioComponent implements OnInit {

  constructor(
    private usuarioService: UsuarioService,
    private route: Router,
    private socialAuthService: AuthService) { }

  ngOnInit() {
    this.usuarioService.buscarUsuarios()
      .then(resultado => {
        console.log('RESULTADO', resultado)
      }).catch(erro => {
        console.log('ERRO AO BUSCAR USUÁRIOS', erro)
      })
  }

  email = '';
  senha = '';


  logar() {
    this.usuarioService.login(this.email, this.senha)
      .then((resultado: any) => {
        if (resultado.user) {
          console.log('certo');
          this.route.navigate(['/pagina-inicial/']);
        } else {
          alert('Erro ao fazer login! Verifique usuario e senha')
        }
      }).catch(erro => {
        console.log('Erro ao buscar usuarios', erro)
      })
  }

//   logar() {
//     this.usuarioService.login(this.usuario, this.senha)
//       .then(resultado: any) => {
//       if (resultado.user) {
//         console.log('certo');
//         this.route.navigate(['/pagina-incial/']);
//       } else {
//         alert('LOGIN INVÁLIDO.')
//       }
//     }).catch (erro => {
//       console.log('ERRO AO BUSCAR USUÁRIO.', erro);
//     })
//   }

  cadastrar() {
    this.route.navigate(['/cadastro/']);
  }

// }






