import { Component, OnInit } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buttons-section',
  templateUrl: './buttons-section.component.html',
  styleUrls: ['./buttons-section.component.css']
})
export class ButtonsSectionComponent implements OnInit {
  lat = 43.83452453468292;
  lng = 18.302976268479117;
  
  constructor(private router: Router) { }

  ngOnInit() {
  }

  open(page: any) {
    this.router.navigateByUrl('/' + page);
}

}
