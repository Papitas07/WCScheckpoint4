import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../connection.service';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})
export class ArtistsComponent implements OnInit {

  constructor(private connection: ConnectionService) { }

  artists = []

  ngOnInit() {
    this.connection.getArtists().subscribe((data: any) => {
      console.log(data)
      this.artists = data
    })
  }

}
