import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { PeliculaDetalle } from 'src/app/interfaces/interface';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {

  @Input() id;
  pelicula: PeliculaDetalle = {};
  constructor( private moviesServices: MoviesService, private modalCon: ModalController ) { }

  ngOnInit() {
    console.log('ID', this.id);
    this.moviesServices.getDetallePelicula( this.id )
    .subscribe( (resp: PeliculaDetalle) => {
      console.log( resp );
      this.pelicula = resp;
    });
  }
  regresar() {
    this.modalCon.dismiss();
  }
}
