import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { WeatherComponent } from './weather/weather.component';
import { LocationComponent} from './location/location.component';
import { MapComponent } from './map/map.component';



const routes: Routes = [
{
  path:'',
  pathMatch: 'full',
  component:HomeComponent
},
{
  path:'weather',
  component:WeatherComponent
},
{
  path:'location',
  component:LocationComponent
},
{
  path:'map',
  component:MapComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
