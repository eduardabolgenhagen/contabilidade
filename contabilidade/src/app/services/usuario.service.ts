import { Injectable } from '@angular/core';
import { EmailValidator } from '@angular/forms';
// import { LoginProviderClass } from 'angular-6-social-login-v2';
// import { promise } from 'protractor';
// import { logWarnings } from 'protractor/built/driverProviders';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {



  constructor() { }

  buscarUsuarios() {
    return new Promise((resolvido, rejeitado) => {

      fetch('/api/buscarUsuario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(resultado => resultado.json())
        .then(resolvido)
        .catch(rejeitado);
    })
  }

  login(email, senha) {
    return new Promise((resolvido, rejeitado) => {
      fetch('api/login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: email,
            senha: senha
          })
        }).then(resultado => resultado.json())
        .then(resolvido)
        .catch(rejeitado);
    })
  }
}



// login(){
//   return new Promise(resolvido, rejeitado) => {
//     fetch('api/login',
//       {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'applicarion/json'
//         },
//         body: JSON.stringify({
//           email: email,
//           senha: senha
//         }).
//     }).then(resultado => resultado.json())
//       .then(resolvido)
//       .catch(rejeitado);
//   }
// }
