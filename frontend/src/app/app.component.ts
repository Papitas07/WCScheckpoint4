import { Component } from '@angular/core';
import { AboutComponent } from './about/about.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  interval: any;
  dynamicdata: string = 'This is dynamic data!';

  start() {
    this.interval = setInterval(() => {
      this.dynamicdata = new Date().toLocaleTimeString();
    }, 1000);
  }

  stop() {
    clearInterval(this.interval);
  }

}
