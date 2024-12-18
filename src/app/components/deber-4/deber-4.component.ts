import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';



interface AutoCompleteCompleteEvent {
  originalEvent: Event;
  query: string;
}

@Component({
  selector: 'app-deber-4',
  standalone: false,
  templateUrl: './deber-4.component.html',
  styleUrl: './deber-4.component.css'
})
export class Deber4Component {
  reservationForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.reservationForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      checkIn: ['', Validators.required],
      checkOut: ['', Validators.required],
      roomType: ['', Validators.required],
      guests: [1, [Validators.required, Validators.min(1)]],
      comments: [''],
      terms: [false, Validators.requiredTrue],
    });
  }

  onSubmit() {
    if (this.reservationForm.valid) {
      console.log('Formulario Enviado:', this.reservationForm.value);
      alert('¡Reservación realizada con éxito!');
      this.reservationForm.reset();
    } else {
      alert('Por favor completa todos los campos requeridos.');
    }
  }
}
