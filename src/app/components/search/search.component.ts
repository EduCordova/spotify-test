import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public termino = '';
  constructor(private spotify: SpotifyService) { }

  ngOnInit() {
    console.log(this.spotify.artistas);
  }

  buscarArtista() {
    if (this.termino) {
      // console.log(this.termino);
      this.spotify.getArtistas(this.termino)
        .subscribe();
    }

  }

}
