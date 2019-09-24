import { Component, OnInit } from '@angular/core';
import M from 'materialize-css/dist/js/materialize.min.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-store';

  ngOnInit(){
    // Init Materialize JS
    M.AutoInit();
  }
}
