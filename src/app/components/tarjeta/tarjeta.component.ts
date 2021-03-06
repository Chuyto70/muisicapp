import { Component, Input} from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent  {

  

  @Input()items:any[]=[]
 
  constructor(private router:Router) {
    

   }

  
  
  verArtista(item:any){
   let artistaID;
    if(item.type === 'artist'){
      artistaID= item.id
    }else{
      artistaID = item.artists[0].id
    }
    console.log(artistaID);
    this.router.navigate(['/artista', artistaID])
  }
  
  
}
