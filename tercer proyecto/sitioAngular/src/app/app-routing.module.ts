import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriasComponent } from './categorias/categorias.component';
import { FavoritasComponent } from './favoritas/favoritas.component';
import { IndexComponent } from './index/index.component';
import { InformacionComponent } from './informacion/informacion.component';
import { PeliculasComponent } from './peliculas/peliculas.component';




const routes: Routes = [
  { path: "peliculas", component: PeliculasComponent },
  { path: "index", component: IndexComponent },
  { path: "favoritas", component: FavoritasComponent },
  { path: "informacion", component: InformacionComponent },
  { path: "categorias", component: CategoriasComponent },
  { path: "index", component: IndexComponent },
  { path: "**", redirectTo: "index" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
