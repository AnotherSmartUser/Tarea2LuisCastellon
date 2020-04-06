import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const URL = environment.url;
const apiKey = environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor( private http: HttpClient ) { }

  private ejecutar<T>( query: string ) {
    query = URL + query;
    query += `&api_key=${ apiKey }&language=es`;
    console.log( query );
    return this.http.get( query );
  }

  getFeature() {
    const hoy = new Date();
    const ul = new Date( hoy.getFullYear(), hoy.getMonth() + 1, 0 ).getDate();
    const mes = hoy.getMonth() + 1;
    let mesString;
    if ( mes < 10 ) {
      mesString = '0' + mes;
    } else {
      mesString = mes;
    }

    const i = `${ hoy.getFullYear() }-${ mesString }-01`;
    const u = `${ hoy.getFullYear() }-${ mesString }-${ ul }`;
    return this.ejecutar(`/discover/movie?primary_release_date.gte=${ i }&primary_release_date.lte=${ u }`);
  }

  getDetallePelicula( id: string ) {
    return this.ejecutar(`/movie/${ id }?`);
  }
}
