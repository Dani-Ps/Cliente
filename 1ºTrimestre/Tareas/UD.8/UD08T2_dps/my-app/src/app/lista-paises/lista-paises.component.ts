import { Component, Input, OnInit } from '@angular/core';
import { ConsultaPaisesService } from '../consultapaises.service';

@Component({
  selector: 'app-lista-paises',
  templateUrl: './lista-paises.component.html',
  styleUrls: ['./lista-paises.component.css']
})
export class ListaPaisesComponent implements OnInit {
  @Input()
  continente!: string;
  paises!: any[];

  constructor(private consultaPaisesService: ConsultaPaisesService) { }

  ngOnInit(): void {
    this.consultaPaisesService.getPaisesPorContinente(this.continente)
      .subscribe((data: any[]) => {
        this.paises = data;
      });
  }
}
