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
  constructor(private spotify: SpotifyService) { }

  buscar(termino: string) {
    this.spotify.getArtists(termino).subscribe((data: any) => {
      console.log(data.artists.items);
      this.artists = data.artists.items;
    });
  }

}
