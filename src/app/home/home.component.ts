import { Component, OnInit } from '@angular/core';
import { TokenService } from '../token-service/token.service';
import { Router } from '@angular/router';
import { Key } from 'selenium-webdriver';
import { Token } from '@angular/compiler';
import { HttpClient } from '@angular/common/http';
import { RefferenceDataService } from '../reference-data/refference-data.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
    model = {
        left: true,
        middle: false,
        right: false
    };

    focus;
    focus1;
    constructor(private tokenService: TokenService,
                private router: Router,
                private httpClient: HttpClient,
                private refferenceData: RefferenceDataService) { }

    ngOnInit() {
        this.getToken();
    }

    getToken(){

        this.tokenService.getToken().subscribe((data: any)=>
        {
            console.log('API Called Successfully')
            console.log(data.token_type="Bearer")
            sessionStorage.setItem("lufthansa",data.token_type+" "+data.access_token)
        }
        );
    }




    open(page: any) {
        this.router.navigateByUrl('/' + page);
    }
}
