import { Component, OnInit } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

@Component({
  selector: 'app-buttons-section',
  templateUrl: './buttons-section.component.html',
  styleUrls: ['./buttons-section.component.css']
})
export class ButtonsSectionComponent implements OnInit {
  lat = 43.83452453468292;
  lng = 18.302976268479117;
  
  constructor() { }

  ngOnInit() {
  }

}
