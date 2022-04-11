import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FarmService } from 'src/services/farm.service';
import { PlotService } from 'src/services/plot.service';
import { RouterService } from 'src/services/router.service';
import { ProductionService } from 'src/services/production.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HomeModule
  ],
  providers: [
    FarmService,
    PlotService,
    RouterService,
    ProductionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
