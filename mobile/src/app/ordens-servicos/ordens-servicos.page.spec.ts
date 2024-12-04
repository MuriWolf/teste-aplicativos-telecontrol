import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrdensServicosPage } from './ordens-servicos.page';

describe('OrdensServicosPage', () => {
  let component: OrdensServicosPage;
  let fixture: ComponentFixture<OrdensServicosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdensServicosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
