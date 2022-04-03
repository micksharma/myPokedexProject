import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import {HttpClientModule} from '@angular/common/http';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { MaterialModule } from "./material.module";
import { SharedModule } from './shared/shared.module';
import { DataService } from './services/data.service';

@NgModule({
  declarations: [AppComponent, PokemonListComponent, PokemonDetailComponent],
  imports: [BrowserModule, HttpClientModule, MaterialModule, NgxPaginationModule , SharedModule, IonicModule.forRoot({mode: "md"}), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    DataService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
