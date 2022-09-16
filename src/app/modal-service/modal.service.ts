import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CityCodesComponent } from '../city-codes/city-codes.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private modalService: NgbModal) { }

  public openCityCodes(){
    const modalRef = this.modalService.open(CityCodesComponent,
      {
        scrollable: true,
        windowClass: 'myCustomModalClass',
      });
  }
}
