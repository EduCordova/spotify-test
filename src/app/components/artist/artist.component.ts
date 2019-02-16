import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {
  public artista: any = {};
  public tracks: any[] = [];
  constructor(private rutaActiva: ActivatedRoute, private spotify: SpotifyService) { }

  ngOnInit() {
    this.rutaActiva.params
      .pipe(map( params => params.id))
      .subscribe(id => {
        console.log(id);
        this.spotify.getArtista(id)
        .subscribe(artista => {
          console.log(artista);
          this.artista = artista;
        });
        this.spotify.getTop(id)
        .subscribe(top => {
          console.log(top);
          this.tracks = top;
        });
      });
  }

}
