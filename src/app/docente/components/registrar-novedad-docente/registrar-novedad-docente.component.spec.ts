import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarNovedadDocenteComponent } from './registrar-novedad-docente.component';

describe('RegistrarNovedadDocenteComponent', () => {
  let component: RegistrarNovedadDocenteComponent;
  let fixture: ComponentFixture<RegistrarNovedadDocenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrarNovedadDocenteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistrarNovedadDocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
