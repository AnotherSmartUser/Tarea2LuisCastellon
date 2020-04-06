import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

const URL = environment.imgPath;

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(img: string, size: string = 'w500'): any {
    if ( !img ) {
      return './assets/imge.jpg';
    }
    const imgUrl = `${ URL }/${ size }/${ img }`;
    // console.log('URL', imgUrl);
    return imgUrl;
  }

}
