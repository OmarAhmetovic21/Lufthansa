import { Component, OnInit } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse,HttpParams, HttpHeaders, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RefferenceDataService } from 'src/app/reference-data/refference-data.service';

@Component({
  selector: 'app-buttons-section',
  templateUrl: './buttons-section.component.html',
  styleUrls: ['./buttons-section.component.css']
})
export class ButtonsSectionComponent implements OnInit {
  lat = 45.824954;
  long = 16.116235;
  view = [];

  saleData = [
    { name: "2017", value: 129300000},
    { name: "2018", value: 141900000 },
    { name: "2019", value: 145300000 },
    { name: "2020", value: 36400000 },
    { name: "2021", value: 46900000 }
  ];

  flightData = [
    { name: "2017", value: 1128745},
    { name: "2018", value: 1163565},
    { name: "2019", value: 1187728 },
    { name: "2020", value: 390900 },
    { name: "2021", value: 460029 }
  ];

  tempData = {
    NearestAirportResource: {
        Airports: {
            Airport: [{
                AirportCode: "SJJ",
                Position: {
                    Coordinate: {
                        Latitude: 43.8247,
                        Longitude: 18.3314
                    }
                },
                CityCode: "SJJ",
                CountryCode: "BA",
                LocationType: "Airport",
                Names: {
                    Name: {
                        "@LanguageCode": "EN",
                        $: "Sarajevo"
                    }
                },
                "Distance": {
                    "Value": 2,
                    "UOM": "KM"
                }
            }, {
                AirportCode: "DBV",
                Position: {
                    Coordinate: {
                        Latitude: 42.5614,
                        Longitude: 18.2683
                    }
                },
                CityCode: "DBV",
                CountryCode: "HR",
                LocationType: "Airport",
                Names: {
                    "Name": {
                        "@LanguageCode": "EN",
                        $: "Dubrovnik"
                    }
                },
                "Distance": {
                    "Value": 141,
                    "UOM": "KM"
                }
            }, {
                AirportCode: "TIV",
                Position: {
                    Coordinate: {
                        Latitude: 42.4047,
                        Longitude: 18.7233
                    }
                },
                CityCode: "TIV",
                CountryCode: "ME",
                LocationType: "Airport",
                Names: {
                    "Name": {
                        "@LanguageCode": "EN",
                        $: "Tivat"
                    }
                },
                "Distance": {
                    "Value": 162,
                    "UOM": "KM"
                }
            }, {
                AirportCode: "SPU",
                Position: {
                    Coordinate: {
                        Latitude: 43.5389,
                        Longitude: 16.2981
                    }
                },
                CityCode: "SPU",
                CountryCode: "HR",
                LocationType: "Airport",
                Names: {
                    "Name": {
                        "@LanguageCode": "EN",
                        $: "Split"
                    }
                },
                "Distance": {
                    "Value": 164,
                    "UOM": "KM"
                }
            }, {
                AirportCode: "TGD",
                Position: {
                    Coordinate: {
                        "Latitude": 42.3594,
                        "Longitude": 19.2519
                    }
                },
                CityCode: "TGD",
                CountryCode: "ME",
                LocationType: "Airport",
                Names: {
                    "Name": {
                        "@LanguageCode": "EN",
                        $: "Podgorica"
                    }
                },
                "Distance": {
                    "Value": 181,
                    "UOM": "KM"
                }
            }]
        }
    }
};
  
  constructor(private router: Router,
              private httpClient: HttpClient,
              private refferenceData: RefferenceDataService) 
   {
    this.view = [innerWidth / 1.4, 400];
   }

  ngOnInit() {
    
  }

  onResize(event) {
    this.view = [event.target.innerWidth / 1.35, 400];
}

  getLocation(){
    /*this.refferenceData.getNearestAirports(this.lat, this.long ).subscribe((data:any)=>{
      console.log(data);
    })*/ 
    console.log("Current position: "+this.lat+" and " +this.long);
   
  }

  open(page: any) {
    this.router.navigateByUrl('/' + page);
}

}
