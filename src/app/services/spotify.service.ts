import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify Service Listo');
  }

  getQuery( query: string ){
    const url = `https://api.spotify.com/v1/${ query }`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCRjv-7JuOW9YHCQ-6DZO_j1VU5OGqi3-tnwQNU_1U3w__j5b68fktdRyoG5RvPgLdiCrs-zo5L7qO501M'
    });

    return this.http.get(url,{ headers });

  }

  getNewReleases(){

    return this.getQuery('browse/new-releases')
               .pipe( map( data => data['albums'].items ));
  }

  getArtistas( termino: string ){

    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
               .pipe( map( data => data['artists'].items ));
  }
  getArtista( id: string ){

    return this.getQuery(`artists/${ id }`);
              //  .pipe( map( data => data['artists'].items ));
  }
  getTopTracks( id: string ){

    return this.getQuery(`artists/${ id }/top-tracks?country=us`)
               .pipe( map( data => data['tracks'] ));
  }
}