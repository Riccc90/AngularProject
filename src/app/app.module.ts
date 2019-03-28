import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule } from "@angular/material";
import { NavbarComponent } from './navbar/navbar.component';
import { AlertComponent } from './components/alert/alert.component';
import { MunicipioDetailComponent } from './components/municipio-detail/municipio-detail.component';
import { MunicipiComponent } from './components/municipi/municipi.component';
import { MunicipioEditComponent } from './components/municipio-edit/municipio-edit.component';
import { MuncipioAddComponent } from './components/muncipio-add/muncipio-add.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    MunicipiComponent,
    MunicipioDetailComponent,
    MuncipioAddComponent,
    MunicipioEditComponent,
    NavbarComponent,
    AlertComponent,
    LoginComponent,
   
    
  ],
  
  imports: [
  BrowserModule,
  AppRoutingModule,
  BrowserModule,
  FormsModule,
  HttpClientModule,
  AppRoutingModule,
  BrowserAnimationsModule,
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]


  
})
export class AppModule { }
