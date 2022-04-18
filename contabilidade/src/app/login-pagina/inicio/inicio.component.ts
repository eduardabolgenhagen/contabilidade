import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
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
      localStorage.removeItem('CNPJ');
  }

  email = ''
  senha = ''

  logar() {
    this.usuarioService.buscarUsuarios()
      .then((resultado: any) => {
        for(let i = 0; i < resultado.list.length; i++){
          if(resultado.list[i].EMAIL == this.email && resultado.list[i].SENHA == this.senha){
            localStorage.setItem('ID', resultado.list[i].ID)
            this.route.navigate(['/pagina-inicial/'])
          }
        }

      }).catch(erro => {
        console.log('ERRO AO BUSCAR USUÁRIOS', erro)
      })
  }

  cadastrar() {
    this.route.navigate(['/cadastro/']);
  }

  public socialSignIn(socialPlatform: string) {
    let socialPlatformProvider;
    if (socialPlatform == "google") {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }

    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform + " sign in data : ", userData);
        this.route.navigate(['/pagina-inicial']);
      }
    );
  }

}

