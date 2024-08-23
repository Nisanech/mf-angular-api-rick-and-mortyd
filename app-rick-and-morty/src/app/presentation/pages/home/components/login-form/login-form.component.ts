import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  buttonText: string = '';

  ngOnInit(): void {
    // Inicializa el texto del botón aquí
    this.buttonText = 'Ingresar →';
  }
  
  login() {
    console.log('click');
  }
}
