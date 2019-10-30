import { Component,ViewChild, OnInit } from '@angular/core';
import {RestService} from '../rest.service';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';
import { Query, DataManager } from '@syncfusion/ej2-data';



@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {

    country:String
    city:String
    valueHere:String
    valueHere1:String
    humidity:String
    cityname:String
    constructor(private _webservice2: RestService) { }

  ngOnInit() {
  }

  processForm() {
    const allInfo = `City is ${this.cityObj.text}&&Country code is ${this.countryObj.text} `;
    alert(allInfo); 
    this.callWebservice(this.cityObj.text,this.countryObj.text);
    
  }

  callWebservice(city:String,country:String) {
    this._webservice2.getweatherlocation(city,country).subscribe(
      data => {  
        console.log("Temperature"+data["main"]["temp"])
        console.log("Weather"+data["weather"][0])
        this.valueHere = "Temperature :"+data["main"]["temp"]
        this.valueHere1 = "Weather :"+data["weather"][0]["main"]
        this.humidity="Humidity :"+data["main"]["humidity"]
        this.cityname="City :"+data["name"]
      },
        err => {console.log('error')},
        () => {console.log('complete')}
    );
  }

   //define the country DropDownList data
public countryData: { [key: string]: Object }[] = [
    { CountryName: 'Au', CountryId: '2' },
    { CountryName: 'Us', CountryId: '1' }
];
//define the state DropDownList data
public stateData: { [key: string]: Object }[] = [
    { StateName: 'New York', CountryId: '1', SateId: '101' },
    { StateName: 'Virginia ', CountryId: '1', SateId: '102' },
    { StateName: 'Tasmania ', CountryId: '2', SateId: '105' },
    { StateName: 'Washington ', CountryId: '1', SateId: '103' }
];
//define the city DropDownList data
public cityData: { [key: string]: Object }[] = [
    { CityName: 'Albany', SateId: '101', CityId: 201 },
    { CityName: 'Beacon ', SateId: '101', CityId: 202 },
    { CityName: 'Emporia', SateId: '102', CityId: 206 },
    { CityName: 'Hampton ', SateId: '102', CityId: 205 },
    { CityName: 'Hobart', SateId: '105', CityId: 213 },
    { CityName: 'Launceston ', SateId: '105', CityId: 214 },
    { CityName: 'Redmond ', SateId: '103', CityId: 215 },
    { CityName: 'Seattle', SateId: '103', CityId: 215 }
];
// maps the appropriate column to fields property for country DropDownList
public countryFields: Object = { text: 'CountryName', value: 'CountryId' };
// maps the appropriate column to fields property for state DropDownList
public stateFields: Object = { text: 'StateName', value: 'SateId' };
// maps the appropriate column to fields property for city DropDownList
public cityFields: Object = { text: 'CityName', value: 'CityId' };
//set the placeholder to country DropDownList input
public countryWatermark: string = "Select a country";
//set the placeholder to state DropDownList input
public stateWatermark: string = "Select a state";
//set the placeholder to city DropDownList input
public cityWatermark: string = "Select a city";
@ViewChild('country',{ static: true })
public countryObj: DropDownListComponent;
@ViewChild('state',{ static: true })
public stateObj: DropDownListComponent;
@ViewChild('city',{ static: true })
public cityObj: DropDownListComponent;
public countryChange(): void {
    let tempQuery: Query = new Query().where('CountryId', 'equal', this.countryObj.value);
    //Query the data source based on country DropDownList selected value
    this.stateObj.query = tempQuery;
    // enable the state DropDownList
    this.stateObj.enabled = true;
    //clear the existing selection.
    this.stateObj.text = null;
    // bind the property changes to state DropDownList
    this.stateObj.dataBind();
    //clear the existing selection in city DropDownList
    this.cityObj.text = null;
    //disabe the city DropDownList
    this.cityObj.enabled = false;
    //bind the property cahnges to City DropDownList
    this.cityObj.dataBind();
}
public stateChange(): void {
    // Query the data source based on state DropDownList selected value
    this.cityObj.query = new Query().where('SateId', 'equal', this.stateObj.value);
    // enable the city DropDownList
    this.cityObj.enabled = true;
    //clear the existing selection
    this.cityObj.text = null;
    // bind the property change to city DropDownList
    this.cityObj.dataBind();
}

}
