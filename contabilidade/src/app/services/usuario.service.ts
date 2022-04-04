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
            email,
            senha
          })
        }).then(resultado => resultado.json())
        .then(resolvido)
        .catch(rejeitado);
    })
  }

  criarGasto(titulo, valor, data, empresaid) {
    return new Promise((resolvido, rejeitado) => {
      fetch('api/criarGasto',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            titulo: titulo, valor: valor, data: data, empresaid: empresaid
          })
        }).then(resultado => resultado.json())
        .then(resolvido)
        .catch(rejeitado);
    })
  }

  criarEmpresa(cnpj, razao, telefone) {
    return new Promise((resolvido, rejeitado) => {
      fetch('api/criarGasto',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            cpnj: cnpj, razao: razao, telefone: telefone
          })
        }).then(resultado => resultado.json())
        .then(resolvido)
        .catch(rejeitado);
    })
  }

}

