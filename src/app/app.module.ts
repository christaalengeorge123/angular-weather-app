import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { WeatherComponent } from './weather/weather.component';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RestService } from './rest.service';
import { ReactiveFormsModule } from '@angular/forms';
import { LocationComponent } from './location/location.component';

import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { MapComponent } from './map/map.component';
import { AgmCoreModule} from '@agm/core';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    WeatherComponent,
    LocationComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    DropDownListModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyA6WZ8C5rhntcyQOHdDzvlIdplhQQtT1CM'
    })

    ],


  providers: [RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
