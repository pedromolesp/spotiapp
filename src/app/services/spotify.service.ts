import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  constructor(private http: HttpClient) {
    console.log("Servicio listo");
  }

  getNewReleases() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQC5dc3NHGmLOmltk4qiUV8WlvDHXEQd8EIKAae6J_r5D66EBYF1XVwTMIPPnsHIhcHnCVjN8MWKT_rfWKeaPlYPZ9JA7c2odZ1mwVJH2loFevWqF9h1RygL41_MEXTv3-mnyuah0kB776_j_oFod_ex7T7pqsQ'
    });
    this.http.get("https://api.spotify.com/v1/browse/new-releases?limit=20",
      { headers }
    ).subscribe(data => console.log(data));
  }
}
