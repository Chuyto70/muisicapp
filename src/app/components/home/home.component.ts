import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  nuevasCanciones:any[]=[]
 listo:boolean = true
 errorServicio:boolean;
 mensaje:string = ""
  constructor(private http:HttpClient,
              private spotify:SpotifyService          
    ) { 
      this.errorServicio = false
    
    this.spotify.getNewRelease().subscribe((data:any)=>{
      

      this.nuevasCanciones= data
      this.listo =false
      console.log(this.nuevasCanciones);
    },(error=>{
      this.errorServicio = true;
      this.listo = false
      this.mensaje = error.error.error.message;
      console.log(error.error.error.message);
    }))
    
  }

  ngOnInit(): void {
  }

}
