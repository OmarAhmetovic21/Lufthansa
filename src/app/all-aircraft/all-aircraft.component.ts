import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-aircraft',
  templateUrl: './all-aircraft.component.html',
  styleUrls: ['./all-aircraft.component.css']
})
export class AllAircraftComponent implements OnInit {
  isDesktopDevice: any;
  constructor(private deviceService: DeviceDetectorService,
              private router: Router) { }

  ngOnInit(): void {
    this.isDesktopDevice = this.deviceService.isDesktop();
  }

  open(page: any) {
    this.router.navigateByUrl('/' + page);
}

}
