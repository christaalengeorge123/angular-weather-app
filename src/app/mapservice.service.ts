import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse,HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap, zip } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

interface Location {
  latitude:string;
  longitude:string;
  zip:number;
}

@Injectable({
  providedIn: 'root'
})
export class MapserviceService {

  constructor(private http: HttpClient) { }
//api.ipapi.com/api/50.123.84.170?access_key=64deab229a8cb8eb5490248dfaaa87c0
  getLocation(){
    return this.http.get<Location>('http://api.ipapi.com/api/check?access_key=64deab229a8cb8eb5490248dfaaa87c0')
  }
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
}
