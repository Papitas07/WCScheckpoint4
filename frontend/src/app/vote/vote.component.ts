import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../connection.service';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.scss']
})
export class VoteComponent implements OnInit {
  artists= [];

  constructor(private connection: ConnectionService) { }

  ngOnInit() {
    this.connection.getArtists().subscribe((data: any) => {
      console.log(data)
      this.artists = data
    })
  }

}
