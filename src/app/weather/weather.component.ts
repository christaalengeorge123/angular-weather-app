import { Component, OnInit } from '@angular/core';
import {RestService} from '../rest.service';

@Component({
  selector: 'app-weather',
template: `
<section class="hero is-primary is-bold">
  <div class="hero-body">
    <div class="container">

      <h1 class="title">Weather !</h1>

    </div>
  </div>
</section>

<section class="section">
<div class="container">

<!-- form goes here -->


<form (ngSubmit)="processForm()">

<!-- Zip Code -->
<div class="field">
<input type="text" name="zip" class="input" placeholder="Zip Code" [(ngModel)]="zip">
</div>

<button type="submit" class="button is-danger is-large">Submit</button>

</form>
<p>{{ valueHere }}</p>
<p>{{ valueHere1 }}</p>
</div>
</section>
`,
  styleUrls: ['./weather.component.scss']


})
export class WeatherComponent implements OnInit {

  zip:number
  valueHere: String
  valueHere1: String

  //public zipcode: number = this.zip;

  constructor(private _webservice: RestService) {
    }
    
  ngOnInit() {
    
  }
  processForm() {
    const allInfo = `Zip code is ${this.zip}`;
    alert(allInfo); 
    this.callWebservice(this.zip)
  }

  callWebservice(zip:number) {
    this._webservice.getweather(zip).subscribe(
      data => {
        
       // console.log(data)
        console.log(data["main"]["temp"])
        console.log(data["weather"][0])
        this.valueHere = data["main"]["temp"]
        this.valueHere1 = data["weather"][0]["main"]
      },
        err => {console.log('error')},
        () => {console.log('complete')}
    );
  }

}
