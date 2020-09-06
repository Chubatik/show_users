import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {Routes, RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";


import { AppComponent }   from './app.component';
import {ListComponent} from './components/list/list.component';
import {ReposComponent} from './components/repos/repos.component';
const appRoutes : Routes = [
    {path : '', component : ListComponent},
    {path : 'repos', component : ReposComponent}
]
@NgModule({
    imports:      [ BrowserModule, 
                    FormsModule ,
                    HttpClientModule,
                    RouterModule.forRoot(appRoutes),
                    AutocompleteLibModule,
                    NgbModule
                    ],
    declarations: [ AppComponent, ListComponent, ReposComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }