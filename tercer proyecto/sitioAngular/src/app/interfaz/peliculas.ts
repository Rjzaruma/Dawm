export interface Pelicula {
    id_p: string,
    titulo: string,
    duracion: string,
    rating: string,
    poster: string,
    estado: string,
    fase: string,
    descripcion: string,
}

export interface Peliculas {
    peliculas: Array<string>
}