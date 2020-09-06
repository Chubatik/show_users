import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {HttpService} from '../../services/http.service';
import {User} from '../../user';

@Component({ 
    selector:'list-comp',
    templateUrl:'list.component.html',
    styleUrls:['list.component.css'],
    providers:[HttpService]
})
export class ListComponent implements OnInit{
    public users : User[] = [];
    keyword : string = "login";
    constructor(private httpService : HttpService, private router : Router){}

    ngOnInit(){
        this.httpService.getData().subscribe( data => {
             this.users = data["usersList"];
        });
       
    }
    selectEvent(){
        this.router.navigate(['repos']);
    }
}