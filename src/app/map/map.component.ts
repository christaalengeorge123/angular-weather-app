import { Component, OnInit } from '@angular/core';
import { MapserviceService} from '../mapservice.service';
import {RestService} from '../rest.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

    lat:string='';
    lng:string='';
    zip :number;
    temperature:String
    weather:String
    humidity:String
    cityname:String

    location:Object;
  constructor(private map:MapserviceService) { }

  ngOnInit() {
    this.map.getLocation().subscribe(data=>{
      console.log(data);
      this.lat=data.latitude;
      this.lng=data.longitude;
      this.zip=data.zip;

    })
  }

  processForm() {
    const allInfo = `Zip code is ${this.zip}`;
    alert(allInfo); 
    this.callWebservice(this.zip)
  }
  callWebservice(zip:number) {
    this.map.getweather(zip).subscribe(
      data => {
        
       // console.log(data)
        console.log(data["main"]["temp"])
        console.log(data["weather"][0])
        this.temperature = "Temperature :"+data["main"]["temp"]
        this.weather = "Weather :"+data["weather"][0]["main"]
        this.humidity="Humidity :"+data["main"]["humidity"]
        this.cityname="City :"+data["name"]
      },
        err => {console.log('error')},
        () => {console.log('complete')}
    );
  }

}
