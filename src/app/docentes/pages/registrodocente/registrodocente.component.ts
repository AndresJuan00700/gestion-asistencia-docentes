import { Component } from '@angular/core';

@Component({
  selector: 'app-registrodocente',
  templateUrl: './registrodocente.component.html',
  styleUrls: ['./registrodocente.component.css']
})
export class RegistrodocenteComponent {
  nombreDocente: string | null = null;
  horaEntrada: string | null = null;

  onCodeResult(result: string) {
    this.nombreDocente = result; // Asumiendo que el QR contiene el nombre del docente
    this.horaEntrada = new Date().toLocaleTimeString();

    // Puedes mostrar en consola o manejar el resultado según lo necesites
    console.log(`Docente: ${this.nombreDocente}, Hora de entrada: ${this.horaEntrada}`);
}
}
