import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HttpClientModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'loginToken';
  email: string = '';
  password: string = '';
  token: string = '';

  constructor(private authService: AuthService) { }

  onSubmit() {
    this.authService.login(this.email, this.password)
      .then(response => {

        this.token = response.token;
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
}
