import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConsultapaisesService } from './consultapaises.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'banderas';
  paises: any[] = [];
  continente: string = '';

  constructor(private consultaPaisesService: ConsultapaisesService) { }

  onChangeContinente(event: any) {
    this.continente = event.target.value;
    this.consultaPaisesService.getPaises(this.continente).subscribe(data => {
      this.paises = data;
    });
  }
}
