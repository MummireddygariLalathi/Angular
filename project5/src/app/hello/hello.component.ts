import { Component} from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent{
  userName:String;

  constructor() {
    this.userName="lol";
   }
greet=()=>{
  alert(`hello ${this.userName} Good to see you`);
}
}
