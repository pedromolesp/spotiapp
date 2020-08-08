import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  token: string = "BQBYHjOzZltgHHJSQdv96JoYAszBm0D-PjlWv221BF2f2PHFU09-avfn5V5s8AIa6kXAV3kqBn_BeLgpjt4FeVq3QYl2xttiuEDmMP1rlmolE4bzldPPkwGRQRIXYs_HI_JYFqK26AjDoICXBdHwXfXRehBJ9k8";
  constructor(private http: HttpClient) {
    console.log("Servicio listo");
  }
  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
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
