import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent {
  artists: any[] = [];

  loading: boolean;

  constructor(private spotify: SpotifyService) { }

  buscar(termino: string) {
    this.loading = true;

    this.spotify.getArtists(termino).subscribe((data: any) => {
      this.artists = data;
      this.loading = false;
    }
    );
  }

}
