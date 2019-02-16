import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  public artistas: any[] = [];
  private urlSpotify = 'https://api.spotify.com/v1/';
  constructor(private http: HttpClient) {
    console.log('corriendo servicio');
  }

  private getHeaders(): HttpHeaders {
      const headers = new HttpHeaders({
        authorization: 'Bearer BQDAV4u-uyJvRncGGNgCXaJrXdxc-9XIA-qmVL_2qcOQmhEzsWDZzovJNowQ7jXLIWDPSXtoOoso0PuwR5k',
      });
      return headers;
  }

  getTop(id: string) {
    const url = `${this.urlSpotify}artists/${id}/top-tracks?country=ES`;
    const headers = this.getHeaders();
    return this.http.get(url, {headers}).pipe(
      map((res: any) => {
        return res.tracks;
      })
    );
  }

  getArtistas(termino: string) {
    const url = `${this.urlSpotify}search?query=${termino}&type=artist&offset=0&limit=20`;
    const headers = this.getHeaders();
    return this.http.get(url, { headers }).pipe(
      map((res: any) => {
        this.artistas = res.artists.items;
        // return this.artistas;
      })
    );
  }

  getArtista(id: string) {
    const url = `${this.urlSpotify}artists/${id}`;
    const headers = this.getHeaders();
    return this.http.get(url, { headers });
  }
}
