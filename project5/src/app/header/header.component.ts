import { Component} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  webTitle:string;
  welcomeImage:string;
  welcomeText:string;


  constructor() { 
    this.webTitle="Angular SPA Demo App";
    this.welcomeText="Hey everyone welcome to angular";
    this.welcomeImage="assets/images/rose.jpg";
  }
}
