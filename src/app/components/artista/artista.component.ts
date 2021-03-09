import { Component} from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ]
})
export class ArtistaComponent {
  artista:any = {};
  topTracks:any[]=[]


  carga:boolean = true
  
  constructor(private rutaActiva:ActivatedRoute,
              private spotify:SpotifyService          
    ) { 

    this.rutaActiva.params.subscribe(url=>{
      console.log(url['id']);
      this.getArtista(url['id'])
      this.getTopTracks(url['id'])
    })
   
  }


  getArtista(id:string){
      this.spotify.getArt(id).subscribe(res=>{
        console.log(res);
        this.artista = res;
        this.carga = false
      })
  }

  getTopTracks(id:string){
    this.spotify.getTopTracks(id).subscribe(res=>{
      console.log(res);
      this.topTracks = res
    })
  }

}
