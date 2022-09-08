import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { Router } from '@angular/router';

@Component({
  selector: 'app-city-codes',
  templateUrl: './city-codes.component.html',
  styleUrls: ['./city-codes.component.css']
})
export class CityCodesComponent implements OnInit {
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
