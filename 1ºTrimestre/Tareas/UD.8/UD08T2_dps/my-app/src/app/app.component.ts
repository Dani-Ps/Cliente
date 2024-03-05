import { Component } from '@angular/core';
import { ConsultaPaisesService } from './consultapaises.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedContinent!: string;

  constructor(private consultaPaisesService: ConsultaPaisesService) {}
}
