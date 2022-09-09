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

cityCodes = [
  {
    code: "SJJ",
    city: "Sarajevo",
    country: "Bosnia and Herzegovina"
  },

  {
    code: "TZL",
    city: "Tuzla",
    country: "Bosnia and Herzegovina"
  },

  {
    code: "BNX",
    city: "Banja Luka",
    country: "Bosnia and Herzegovina"
  },

  {
    code: "OMO",
    city: "Mostar",
    country: "Bosnia and Herzegovina"
  },

  {
    code: "ZAG",
    city: "Zagreb",
    country: "Croatia"
  },

  {
    code: "OSI",
    city: "Osijek",
    country: "Croatia"
  },

  {
    code: "RJK",
    city: "Rijeka",
    country: "Croatia"
  },

  {
    code: "PUY",
    city: "Pula",
    country: "Croatia"
  },

  {
    code: "ZAD",
    city: "Zadar",
    country: "Croatia"
  },

  {
    code: "SPU",
    city: "Split",
    country: "Croatia"
  },

  {
    code: "DBV",
    city: "Dubrovnik",
    country: "Croatia"
  },

  {
    code: "TGD",
    city: "Podgorica",
    country: "Montenegro"
  },

  {
    code: "TIV",
    city: "Tivat",
    country: "Montenegro"
  }
  
]

}
