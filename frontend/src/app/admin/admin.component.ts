import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../connection.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private connection: ConnectionService) { }

  artists = []
  newArtist = {
    id: '',
    firstname: '',
    nickname: '',
    talent: ''
  }

  ngOnInit() {
    this.connection.getArtists().subscribe((data: any) => {
      console.log(data)
      this.artists = data
    })
  }

  deleteArtist(id: number) {
    this.connection.deleteArtist(id).subscribe( (data) => {
      console.log(data)
      console.log('deleted')
    })
  }

  create() {
    this.connection.createArtist(this.newArtist).subscribe( (data) => {
      console.log(data)
    })
  }

  update() {
    this.connection.updateArtist(this.newArtist).subscribe( (data) => {
      console.log(data)
    })
  } 

 /*  vote() {
    this.connection.voteArtist()
  } */
}
