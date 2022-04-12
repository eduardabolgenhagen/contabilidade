import { Injectable } from '@angular/core';

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

  // login(email, senha) {
  //   return new Promise((resolvido, rejeitado) => {
  //     fetch('api/login',
  //       {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json'
  //         },
  //         body: JSON.stringify({
  //           email,
  //           senha
  //         })
  //       }).then(resultado => resultado.json())
  //       .then(resolvido)
  //       .catch(rejeitado);
  //   })
  // }

  criarGasto(titulo, valor, data, idUser) {
    return new Promise((resolvido, rejeitado) => {
      fetch('/api/criarGasto',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            titulo: titulo, 
            valor: valor, 
            data: data,
            idUser: idUser
          })
        }).then(resultado => resultado.json())
        .then(resolvido)
        .catch(rejeitado);
    })
  }

  criarEmpresa(cnpj, razao, telefone) {
    return new Promise((resolvido, rejeitado) => {
      fetch('/api/criarEmpresa',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            cpnj: cnpj,
            razao: razao, 
            telefone: telefone
          })
        }).then(resultado => resultado.json())
        .then(resolvido)
        .catch(rejeitado);
    })
  }

  criarUsuario(nome, email, senha){
    return new Promise((resolvido, rejeitado) => {
      fetch('/api/criarUsuario',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          nome: nome,
          email : email,
          senha: senha
        })
      }).then(resultado => resultado.json())
      .then(resolvido)
      .catch(rejeitado);
    })
  }

  buscarEmpresas() {
    return new Promise((resolvido, rejeitado) => {

      fetch('/api/buscarEmpresa', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(resultado => resultado.json())
        .then(resolvido)
        .catch(rejeitado);
    })
  }

}

