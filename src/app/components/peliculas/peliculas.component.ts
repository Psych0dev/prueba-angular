import { Component, OnInit } from "@angular/core";
import { Pelicula } from "../../models/pelicula";
import { PeliculaService } from "../../services/pelicula.service";

@Component({
  selector: "app-peliculas",
  templateUrl: "./peliculas.component.html",
  styleUrls: ["./peliculas.component.css"],
  providers: [PeliculaService]
})
export class PeliculasComponent implements OnInit {
  public peliculas: Pelicula[];
  public favorita: Pelicula;
  public fecha: any;

  constructor(private _peliculaService: PeliculaService) {
    this.peliculas = this._peliculaService.getPeliculas();
    this.fecha = new Date(2020, 8, 12);
  }

  ngOnInit() {
    console.log(this.peliculas);
    console.log(this._peliculaService.holaMundo());
  }

  mostrarFavorita(event) {
    this.favorita = event.pelicula;
  }
}
