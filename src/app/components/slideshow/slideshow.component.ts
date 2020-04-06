import { Component, OnInit, Input } from '@angular/core';
import { Pelicula } from 'src/app/interfaces/interface';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss'],
})
export class SlideshowComponent implements OnInit {

  @Input() peliculas: Pelicula[] = [];

  slideop = {
    slidesPerView: 1.1,
    freeMode: true
  };

  constructor( private modalCon: ModalController ) { }

  ngOnInit() {
  }


// Retorna una promesa Async por el await
  async verDetalle( id: string ) {
    const MODAL = await this.modalCon.create({
      component: DetalleComponent,
      componentProps: {
        id
      }
    });
    MODAL.present();
  }

}
