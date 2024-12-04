import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrdensServicosDetalhesPage } from './ordens-servicos-detalhes.page';

describe('OrdensServicosDetalhesPage', () => {
  let component: OrdensServicosDetalhesPage;
  let fixture: ComponentFixture<OrdensServicosDetalhesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdensServicosDetalhesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
