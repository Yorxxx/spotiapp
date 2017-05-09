import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';
var Observable = require('rxjs/Observable').Observable;

@Injectable()
export class SpotifyService {

  data:any[] = [];
  searchUrl:string = "https://api.spotify.com/v1/search";

  constructor(private http:Http) { }

  searchArtists(query: string) {

    if (!query || query.length === 0) {
      return Observable.of([]);
    }

    let suffix = `?q=${ query }&type=artist`;
    let url = this.searchUrl + suffix;

    return this.http.get(url)
        .map( res => {
          return res.json();
        });
  }
}
