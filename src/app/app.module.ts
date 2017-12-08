import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import {  MdMaterialModule } from '@angular/material';
// import 'hammerjs';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { TodosComponent } from './pages/todos/todos.component';
import { AppRoutingModule } from './app-routing.module';

import { ResourceComponent } from "./resource/app.component";
import { ApiUrl } from "./resource/api-url-injection-token";
import { ResourceModule } from "./resource/index";

import { environment } from "../environments/environment.prod";

// import { TodosService } from './services/todos/todos.service';
// import { XhrFactoryService } from './services/xhr-factory/xhr-factory.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TodosComponent,
    ResourceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ResourceModule.forRoot(environment.api),
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
