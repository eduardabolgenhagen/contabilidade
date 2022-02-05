import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaEscolhasComponent } from './pagina-escolhas.component';

describe('PaginaEscolhasComponent', () => {
  let component: PaginaEscolhasComponent;
  let fixture: ComponentFixture<PaginaEscolhasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaEscolhasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaEscolhasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
