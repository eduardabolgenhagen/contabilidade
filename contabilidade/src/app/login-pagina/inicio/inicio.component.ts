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
  }

email = ''
senha = ''


logar() {
  this.usuarioService.login(this.email, this.senha)
    .then((resultado: any) => {
      if (resultado.email == this.email) {
        console.log('passou');
        this.route.navigate(['/pagina-inicial/']);
      } else {
        alert('Erro ao fazer login! Verifique usuario e senha')
        console.log(resultado)
      }
    }).catch(erro => {
      console.log('Erro ao buscar usuarios', erro)
    })
}


cadastrar() {
  this.route.navigate(['/cadastro/']);
}

public socialSignIn(socialPlatform: string) {
  let socialPlatformProvider;
  if(socialPlatform == "google"){
    socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
}
  
  this.socialAuthService.signIn(socialPlatformProvider).then(
  (userData) => {
    console.log(socialPlatform + " sign in data : ", userData);

  }
);
}

}

