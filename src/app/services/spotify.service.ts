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
      'Authorization': `Bearer BQB1ZBHigBx5H93rSAiKKPZ6IQ7QP39HjTwszDJMf8czj7IDWz--5eAnHhdGIt2nKe81i8P7uaPM2az3YvC7dGCJaexznUP0Zp8r6tb0IVvyivg3qf87Qm0jddysfpx2iE0PtASRsHpisDaE_nDLOU1NPW1Kz80`
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

  getArtist(id: string) {

    return this.getQuery(`artists/${id}`);
    //.pipe(map(data => data['artists'].items
    //));
  }
}
