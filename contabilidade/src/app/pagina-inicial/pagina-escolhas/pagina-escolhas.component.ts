import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina-escolhas',
  templateUrl: './pagina-escolhas.component.html',
  styleUrls: ['./pagina-escolhas.component.css']
})
export class PaginaEscolhasComponent implements OnInit {

  constructor( private route: Router) { };

  ngOnInit() {
  }

  gastos(){
    this.route.navigate(['/gastos/'])
  }

  extrato(){
    this.route.navigate(['/extrato/'])
  }

  logout(){
    this.route.navigate([""])
  }


}
