import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify Service Listo');
  }
  getNewReleases(){

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAPhuRrJ_cK2-O88ABkkRIoN_2u1LuAvbT991fLJw4nsts911VuByjuYBpaPQyFEPW3PLL0G9CssSN3IzU'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers});
  }

  getArtista( termino: string ){

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAPhuRrJ_cK2-O88ABkkRIoN_2u1LuAvbT991fLJw4nsts911VuByjuYBpaPQyFEPW3PLL0G9CssSN3IzU'
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${{ termino }}&type=artist`, {headers});
  }
}
