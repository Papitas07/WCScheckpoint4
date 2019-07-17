import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router : Router) { }

  onAnchorClick() {
    try {
   this.router.navigate(['/home'], {fragment: 'aboutus'});
    }
    catch(e){
      console.log(e)
    }
  }

  ngOnInit() {
  }

}
