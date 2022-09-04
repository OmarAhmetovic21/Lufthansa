import { Component, OnInit } from '@angular/core';
import { TokenService } from '../token-service/token.service';
import { Router } from '@angular/router';

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
                private router: Router) { }

    ngOnInit() {
        this.getToken();
    }


    getToken(){
        let data ={
            client_id :"8fm3w586ef5svqyzfsq4ejf8",
            client_secret: "xfbB89ucEez2Se6hxzdM",
            grant_type: "client_credentials"
          }
        this.tokenService.getToken(data).subscribe((data: any)=>
        console.log('API Called Successfully'));
        console.log(data);
    }

    open(page: any) {
        this.router.navigateByUrl('/' + page);
    }
}
