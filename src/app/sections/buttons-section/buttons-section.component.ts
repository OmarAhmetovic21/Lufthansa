import { Component, OnInit } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-buttons-section',
  templateUrl: './buttons-section.component.html',
  styleUrls: ['./buttons-section.component.css']
})
export class ButtonsSectionComponent implements OnInit {
  lat = 43.83454899003578;
  lng = 18.302942704060282;
  
  constructor(private router: Router) {
   }

  ngOnInit() {
  }

  getLocation(){
    navigator.geolocation.getCurrentPosition( pos => {
      this.lng = +pos.coords.longitude;
      this.lat = +pos.coords.latitude;
      console.log("Current position: "+this.lat+" and " +this.lng);
    });
    
  }

  open(page: any) {
    this.router.navigateByUrl('/' + page);
}

}
