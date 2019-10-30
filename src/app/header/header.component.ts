import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
template: `
<div class="navbar is-dark">
<div class="navbar-brand">
<a class="navbar-item">
Welcome to Weather App!
</a>
</div>

<!-- menu -->
  <div class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item" routerLink="">Home</a>
      <a class="navbar-item" routerLink="weather">Weather</a>
      <a class="navbar-item" routerLink="location">Location</a> 
      <a class="navbar-item" routerLink="map">Map</a> 
    </div>
  </div>

</div>
`,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
