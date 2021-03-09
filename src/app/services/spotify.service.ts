import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {map, catchError} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) { 
    console.log('Servicio de spotify listo para usar');
  }


  getQuery(query:string){
    const url =`https://api.spotify.com/v1/${query}`

    
    const headers= new HttpHeaders({'Authorization': 'Bearer BQCSFA8zBeYnUmBeoQQWbRJ8v2QqCJFmgLXk5QDckYwgV8BxMi-9Qmd0kyz8S8VItLdf3Hke2PCWJrKP3RrdTMrtWPeasfH0-tzdGav7Mg5CCIM88jjiqJoDZOvzkKnNmSnb0yJiqy1eWmoyDJsotx0fTUClCS4LVK4'})
    
    return this.http.get(url, {headers});
  
  }


  getNewRelease(){
    
    return this.getQuery('browse/new-releases').pipe(map((data:any)=>{
      return data.albums.items
    }))
    
  
  }


  getArtista(termino:string){


    return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe(map((data:any)=>{
      return data.artists.items
    }))
    
   
  }


  getArt(id:string){
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks(id:string){
    return this.getQuery(`artists/${id}/top-tracks?market=ES`)
            .pipe(map((data:any)=>{
              return data['tracks']
            }))
  }
}
