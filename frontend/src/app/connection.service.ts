import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {
  url: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  sendMessage(messageContent: any) {
    return this.http.post(
      `${this.url}/contact`,
      messageContent
    );
  }

  getArtists() {
    return this.http.get(`${this.url}/artists`)
  }

  deleteArtist(id: number) {
    return this.http.delete(`${this.url}/artists/${id}`)
  }

  createArtist(artist) {
    const art = artist
    delete art.id
    return this.http.post(
      `${this.url}/artists`,
      art
    )
  }

  updateArtist(artist) {
    return this.http.put(
      `${this.url}/artists/${artist.id}`,
      artist
    ) 
  }

/*   voteArtist(id){
    return this.http.post(
      `${this.url}/vote/${id}`,
      artist
    )
  } */
}
