import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {
  constructor(private domsegurisimo:DomSanitizer){

  }

  transform(value:string) {
    const uri = "https://open.spotify.com/embed?uri="
    
    return this.domsegurisimo.bypassSecurityTrustResourceUrl(uri +value )
  }

}
