import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../interfaz/peliculas';
import { Actor } from '../interfaz/actores';
import { RecursoService } from '../servicios/recurso.service';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent implements OnInit {
  public id = ""
  actores: any = []
  data: any = []
  constructor(private recursoService: RecursoService) { }

  ngOnInit(): void {

    this.recursoService.on<string>().subscribe(
      data => {
        this.id = data;
        
      }
    )

    this.recursoService.obtenerPeliculasPorId(this.id).subscribe(respuesta => {
      this.data = respuesta as Pelicula
      console.log(this.data)
    })

    this.recursoService.obtenerActoresPorId(this.id).subscribe(respuesta => {
      this.actores = respuesta as Actor
    })

  }
  


}
