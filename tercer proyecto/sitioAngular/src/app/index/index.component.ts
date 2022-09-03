import { Component, OnInit } from '@angular/core';
import { InformacionService } from '../servicios/informacion.service';
import { Ratings } from '../interfaz/ratings';
import { Rating } from '../interfaz/ratings';
import { Pelicula } from '../interfaz/peliculas';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  data: any = []
  ratio: any = []
  set: any = new Set();
  SelectedValue:any;
  ChangeRank(e:any){
    console.log(e.target.value)
    this.SelectedValue=e.target.value
    this.informacionService.obtenerPeliculasPorRate(this.SelectedValue).subscribe(respuesta => {
      this.data = respuesta as Pelicula
      //console.log(this.data)
    })
  }
  constructor(private informacionService: InformacionService) {
    
   }

  ngOnInit(): void {

    this.informacionService.obtenerPeliculas().subscribe(respuesta => {
      this.data = respuesta as Pelicula
      //console.log(this.data)
    })
    this.informacionService.obtenerNoRelacional().subscribe(respuesta => {
      this.ratio = respuesta as Rating
      for(let elem of this.ratio){
        let rating = elem.rating
        this.set.add(rating)
      }
    })

    

  }

}
