import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Respuesta, Pelicula } from '../interfaces/interface';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  peliculasRe: Pelicula[] = [];

  constructor( private moviesServices: MoviesService ) {}

  ngOnInit() {
    this.moviesServices.getFeature().subscribe(( resp: Respuesta ) => {
      console.log('Resp', resp);
      this.peliculasRe = resp.results;
    });
  }
}
