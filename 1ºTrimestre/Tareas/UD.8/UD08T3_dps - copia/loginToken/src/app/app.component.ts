import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';
import { FormsModule } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';
import { GetAllService } from './get-all-service.service'
import { ProductosComponent } from './productos/productos.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ProductosComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(
    private authService: AuthService,
    private getAllService: GetAllService
  ) {}
  title = 'loginToken';
  email!: string;
  password!: string;
  token!: string;
  cabeceras = new HttpHeaders({
    'Content-Type': 'application/json',
  });
  productos: any[] = [];
  mostrarProductos = false;

  onSubmit() {
    localStorage.removeItem('token');
    this.authService
      .login(this.email, this.password, this.cabeceras)
      .then((response: any) => {
        this.token = response.token;

        localStorage.setItem('token', this.token);

        this.obtenerProductos(this.token);
      })
      .catch((error: any) => {
        console.error('Error:', error);
      });
  }

  obtenerProductos(token: string) {
    this.getAllService.getAllProductos(token).subscribe(
      (data: any) => {
        this.productos = data; // Guarda los productos recibidos
        this.mostrarProductos = true; // Muestra el componente de productos
      },
      (error) => {
        console.error('Error al obtener los productos:', error);
      }
    );
  }
}
