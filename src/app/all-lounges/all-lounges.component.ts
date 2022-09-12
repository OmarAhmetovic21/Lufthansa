import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { Router } from '@angular/router';
import { LoungesService } from '../lounges-service/lounges.service';
import { BehaviorSubject } from 'rxjs';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-all-lounges',
  templateUrl: './all-lounges.component.html',
  styleUrls: ['./all-lounges.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class AllLoungesComponent implements OnInit {
  isDesktopDevice: any;
  loungesObservable: BehaviorSubject<any[]>;
  loungesList =[
    {
      AirportCode: "FRA",
      Names: {
        Name: {
          $: "Lufthansa Senator Lounge"
        }
      },
      Locations: {
        Location: {
          $: "Terminal 1, Departure area C (NonSchengen), near gates C14/C15"
        }
      }
    },
  
    {
      AirportCode: "FRA",
      Names: {
        Name: {
          $: "Lufthansa Business Class Lounge"
        }
      },
      Locations: {
        Location: {
          $: "Terminal 1, Departure area C (NonSchengen), near gates C14/C15"
        }
      }
    },
  ]

  constructor(private deviceService: DeviceDetectorService,
              private router: Router,
              private loungesService: LoungesService,
              ) {
          this.loungesObservable = new BehaviorSubject<any[]>([]);
               }

  ngOnInit(): void {
    this.isDesktopDevice = this.deviceService.isDesktop();
    this.getLounges();
  }

  open(page: any) {
    this.router.navigateByUrl('/' + page);
}

getLounges() {
  this.loungesService.getLounges().subscribe(
    (data: any) => {
    // resp.json().data
    this.loungesObservable.next(data.LoungeResource.Lounges.Lounge);
    console.log(data);
    
  }, (error: any) => {
    console.log(error)
    this.loungesObservable.next(this.loungesList);
  })
}

}
