import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaExtratoComponent } from './pagina-extrato.component';

describe('PaginaExtratoComponent', () => {
  let component: PaginaExtratoComponent;
  let fixture: ComponentFixture<PaginaExtratoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaExtratoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaExtratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
