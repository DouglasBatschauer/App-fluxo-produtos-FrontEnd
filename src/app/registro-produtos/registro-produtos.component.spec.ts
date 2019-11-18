import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroProdutosComponent } from './registro-produtos.component';

describe('RegistroProdutosComponent', () => {
  let component: RegistroProdutosComponent;
  let fixture: ComponentFixture<RegistroProdutosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroProdutosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
