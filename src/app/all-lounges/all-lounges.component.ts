import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { Router } from '@angular/router';
import { LoungesService } from '../lounges-service/lounges.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-all-lounges',
  templateUrl: './all-lounges.component.html',
  styleUrls: ['./all-lounges.component.css']
})
export class AllLoungesComponent implements OnInit {
  isDesktopDevice: any;
  loungesObservable: BehaviorSubject<any[]>;
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
getLounges(){
  this.loungesService.getLounges().subscribe((data: any) => {
    // resp.json().data
    this.loungesObservable.next(data);
    console.log(data);
    
  })
}


}
