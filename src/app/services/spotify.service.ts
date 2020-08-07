import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  constructor(private http: HttpClient) {
    console.log("Servicio listo");
  }
  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAwuSDtu6VgDNLUodCg3h14zNnbgBCFX-561j4yA_wlrqAzrqOL9N4UIKo4KvUVnXPc8zgaqxwQYmr2py7ak09hWtfLg6KmNee71qQUIgXHKxyZev1wDZfSIHF-1i1MwspPGGL9_IMs7kt7w25AZqMQ5obqLPU'
    });

    return this.http.get(url,
      { headers });
  }

  getNewReleases() {


    return this.getQuery('browse/new-releases?limit=20').pipe(map(data => data['albums'].items
    ));
  }
  getArtists(termino: string) {

    return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe(map(data => data['artists'].items
    ));


  }
}
