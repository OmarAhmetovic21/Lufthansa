import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AllLoungesComponent } from './all-lounges/all-lounges.component';
import { HomeComponent } from './home/home.component';
import { AllAircraftComponent } from './all-aircraft/all-aircraft.component';

const routes: Routes =[
    { path: 'home',             component: HomeComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'all-aircraft', component: AllAircraftComponent},
    { path: 'all-lounges', component: AllLoungesComponent}
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
