import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { Router } from '@angular/router';
import { LoungesService } from '../lounges-service/lounges.service';
import { BehaviorSubject } from 'rxjs';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CityCodesComponent } from '../city-codes/city-codes.component';

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
      },

      OpenningHours: {
          Hours: "5:00 am - 10:00 pm"
      },

      Features: {
        NonSmokingLounge: false,
        Restrooms: false,
        ShowerFacilities: true,
        RelaxingRooms: false,
        MeetingRooms: false,
        OfficeUnits: true,
        CopyMachine: true,
        FaxMachine: false,
        MAMPrinter: false,
        CreditCardTelephone: false,
        FreeLocalTelephoneCalls: false,
        PCWithInternetAccess: false,
        DataPortForLaptops: false,
        WLANFacility: true,
        TV: true
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
          $: "Terminal 1, Concourse C (NonSchengen), Departure level, above gates C14/C15"
        }
      },

      OpenningHours: {
        Hours: "5:00 am - 10:00 pm"
      },

      Features: {
        NonSmokingLounge: false,
        Restrooms: false,
        ShowerFacilities: true,
        RelaxingRooms: false,
        MeetingRooms: false,
        OfficeUnits: true,
        CopyMachine: true,
        FaxMachine: false,
        MAMPrinter: false,
        CreditCardTelephone: false,
        FreeLocalTelephoneCalls: false,
        PCWithInternetAccess: false,
        DataPortForLaptops: false,
        WLANFacility: true,
        TV: true
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
          $: "Terminal 1, Departure area B (NonSchengen), near gates B24 and B28"
        }
      },

      OpenningHours: {
        Hours: "5:00 am - 10:00 pm"
      },
      
      Features: {
        NonSmokingLounge: false,
        Restrooms: false,
        ShowerFacilities: true,
        RelaxingRooms: false,
        MeetingRooms: false,
        OfficeUnits: true,
        CopyMachine: true,
        FaxMachine: false,
        MAMPrinter: false,
        CreditCardTelephone: false,
        FreeLocalTelephoneCalls: false,
        PCWithInternetAccess: false,
        DataPortForLaptops: false,
        WLANFacility: true,
        TV: true
    }
    },

    {
      AirportCode: "FRA",
      Names: {
        Name: {
          $: "Lufthansa Senator Lounge"
        }
      },
      Locations: {
        Location: {
          $: "Terminal 1, Departure area A (Schengen)  opposite to Duty Free Shop, in direction of gate A50"
        }
      },

      OpenningHours: {
          Hours: "5:00 am - 10:00 pm"
      },

      Features: {
        NonSmokingLounge: false,
        Restrooms: false,
        ShowerFacilities: true,
        RelaxingRooms: false,
        MeetingRooms: false,
        OfficeUnits: true,
        CopyMachine: true,
        FaxMachine: false,
        MAMPrinter: false,
        CreditCardTelephone: false,
        FreeLocalTelephoneCalls: false,
        PCWithInternetAccess: false,
        DataPortForLaptops: false,
        WLANFacility: true,
        TV: true
    }
    },


  ]

  constructor(public activeModal: NgbActiveModal,
              private deviceService: DeviceDetectorService,
              private router: Router,
              private loungesService: LoungesService,
              private modalService: NgbModal
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

clickTableRow(data){
  if(data.visible){
    data.visible = !data.visible;
  }
  else{
    data.visible = true;
  }
}

openCityCodes(){
  const modalRef = this.modalService.open(CityCodesComponent,
    {
      scrollable: true,
      windowClass: 'myCustomModalClass',
    });
    modalRef.result.then((result:any) => {
      console.log(result);
    })
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
