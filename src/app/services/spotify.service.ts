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
      'Authorization': 'Bearer BQAwuSDtu6VgDNLUodCg3h14zNnbgBCFX-561j4yA_wlrqAzrqOL9N4UIKo4KvUVnXPc8zgaqxwQYmr2py7ak09hWtfLg6KmNee71qQUIgXHKxyZev1wDZfSIHF-1i1MwspPGGL9_IMs7kt7w25AZqMQ5obqLPU'
    });
    return this.http.get("https://api.spotify.com/v1/browse/new-releases?limit=20",
      { headers }
    );
  }
  getArtists(termino: string) {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAwuSDtu6VgDNLUodCg3h14zNnbgBCFX-561j4yA_wlrqAzrqOL9N4UIKo4KvUVnXPc8zgaqxwQYmr2py7ak09hWtfLg6KmNee71qQUIgXHKxyZev1wDZfSIHF-1i1MwspPGGL9_IMs7kt7w25AZqMQ5obqLPU'
    });
    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`,
      { headers }
    );
  }
}
