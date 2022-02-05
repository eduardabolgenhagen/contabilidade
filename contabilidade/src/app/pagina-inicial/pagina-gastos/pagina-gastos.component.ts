import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina-gastos',
  templateUrl: './pagina-gastos.component.html',
  styleUrls: ['./pagina-gastos.component.css']
})
export class PaginaGastosComponent implements OnInit {

  constructor( private route: Router) { }

  ngOnInit() {
  }

}
