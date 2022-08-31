import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../interfaz/peliculas';
import { RecursoService } from '../servicios/recurso.service';


@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {
  public fase = "";
  data: any = []
  constructor(private recursoService: RecursoService) { }

  ngOnInit(): void {
    this.recursoService.on<string>().subscribe(
      data => {
        this.fase = data;
        //console.log(data)
      }
    )
    this.recursoService.obtenerPeliculasPorFase(this.fase).subscribe(respuesta => {
      this.data = respuesta as Pelicula
      //console.log(this.data)
    })
  }
  send(value: any) {
    this.recursoService.emit<string>(value);
    //console.log(value)
  }
}

/*
this.recursoService.obtenerPeliculas().subscribe(respuesta => {
this.data = respuesta as Pelicula
console.log(this.data)
})
*/