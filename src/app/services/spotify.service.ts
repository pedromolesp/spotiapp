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
      'Authorization': `Bearer BQCb_vsKE93TIHOxOEwWpvQKALuZ8E2zEvCRKl6WKqIKwiuQxC2p5mITUqyXoEl0KDM67PwqvfhJ5jjHzY60Z-Y8dPI_h0CZmRPSqHCrshx07Z1jus6mqqojJBbYxGoDGfrkbpYk8f3-68ba7gcs8x2SSNmhmA0`
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
  getTopTracks(id: string) {

    return this.getQuery(`artists/${id}/top-tracks?country=es`)
      .pipe(map(data => data['tracks']
      ));
  }
}
