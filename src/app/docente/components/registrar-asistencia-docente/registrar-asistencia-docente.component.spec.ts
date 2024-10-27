import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarAsistenciaDocenteComponent } from './registrar-asistencia-docente.component';

describe('RegistrarAsistenciaDocenteComponent', () => {
  let component: RegistrarAsistenciaDocenteComponent;
  let fixture: ComponentFixture<RegistrarAsistenciaDocenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrarAsistenciaDocenteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistrarAsistenciaDocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
