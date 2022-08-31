import { Component, OnInit } from '@angular/core';
import { RecursoService } from '../servicios/recurso.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {
  data: any = []

  constructor(private recursoService: RecursoService) { }

  ngOnInit(): void {
  }
  send(value: any) {
    this.recursoService.emit<string>(value);
  }


}
