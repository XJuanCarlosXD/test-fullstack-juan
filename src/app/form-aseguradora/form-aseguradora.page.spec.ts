import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormAseguradoraPage } from './form-aseguradora.page';

describe('FormAseguradoraPage', () => {
  let component: FormAseguradoraPage;
  let fixture: ComponentFixture<FormAseguradoraPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FormAseguradoraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
