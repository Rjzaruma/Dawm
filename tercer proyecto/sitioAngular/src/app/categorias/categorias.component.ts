import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../interfaz/peliculas';
import { Peliculas } from '../interfaz/peliculas';
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
    this.recursoService.obtenerPeliculas().subscribe(respuesta => {
      this.data = respuesta as Pelicula
      console.log(this.data)




    })
  }

}
