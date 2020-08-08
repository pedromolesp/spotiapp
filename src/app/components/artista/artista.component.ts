import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ]
})
export class ArtistaComponent {
  artist: any = {};
  loading: boolean;

  constructor(private router: ActivatedRoute, private spotify: SpotifyService) {
    this.router.params.subscribe(params => {
      this.loading = true;
      this.getArtista(params['id']);
    });
  }

  getArtista(id: string) {


    this.spotify.getArtist(id).subscribe(artist => {
      this.artist = artist;
      this.loading = false;

    });
  }

}
