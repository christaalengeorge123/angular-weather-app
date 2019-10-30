import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse,HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap, zip } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};{}

@Injectable()
export class RestService {

 

  constructor(private http: HttpClient) { }
 

  
  // Uses http.get() to load data from a single API endpoint
  getweather(zip:number) {
    var zz=zip.toString();
    var str3 = zz.concat( ",us" );
    const params = new HttpParams()
    .set('zip', str3);
 
    console.log(params.toString());
   

    //api.openweathermap.org/data/2.5/weather?zip=94040,us&APPID=3bb0e7efe0b7bbbada13c6c357c9a1f5
    //'http://dataservice.accuweather.com/currentconditions/v1/340247?apikey=Gvvs2FPxt6cbu32NoduN3wZObPNkG4XN'
    //'api.openweathermap.org/data/2.5/weather?&APPID=3bb0e7efe0b7bbbada13c6c357c9a1f5',{params}


    return this.http.get('https://api.openweathermap.org/data/2.5/weather?&APPID=3bb0e7efe0b7bbbada13c6c357c9a1f5',{params});
  }
  getweatherlocation(city:String,country:String) {
    
    var str3 = city.concat( ","+country);
    const params = new HttpParams()
    .set('q', str3);
 
    console.log(params.toString());
    //api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=3bb0e7efe0b7bbbada13c6c357c9a1f5

    return this.http.get('https://api.openweathermap.org/data/2.5/weather?APPID=3bb0e7efe0b7bbbada13c6c357c9a1f5',{params});
  }


}
