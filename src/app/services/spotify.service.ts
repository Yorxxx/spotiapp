import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class SpotifyService {

  data:any[] = [];
  searchUrl:string = "https://api.spotify.com/v1/search";

  constructor(private http:Http) { }

  searchArtists(query: string) {

    let suffix = `?q=${ query}&type=artist`;
    let url = this.searchUrl + suffix;

    return this.http.get(url)
        .map( res => {
          console.log(res);
        });
  }
}
