import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina-extrato',
  templateUrl: './pagina-extrato.component.html',
  styleUrls: ['./pagina-extrato.component.css']
})
export class PaginaExtratoComponent implements OnInit {

  constructor( private route: Router) { }

  ngOnInit() {
  }

}
