import {Component, OnInit} from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';

import {HttpService} from '../../services/http.service';
import {User} from '../../user';

@Component({
    selector:'repos-comp',
    templateUrl:'repos.component.html',
    styleUrls:['repos.component.css'],
    providers:[HttpService]
})

export class ReposComponent implements OnInit{
    public user : User[] = [];
    favRepos : any[] = [];
    closeResult:string;
    modalOptions:NgbModalOptions;
    private index:number = 0;
    constructor(private httpService : HttpService,
                private modalService : NgbModal){
                    this.modalOptions = {
                        backdrop:'static',
                        backdropClass:'customBackdrop'
                      }   
                }
    ngOnInit(){
        this.httpService.getDataSingle().subscribe(data => {
            this.user = data["repoList"];
        });
    }
     setIndex(i:number){
          this.index = i;
      }
    open( content : any) {
        this.modalService.open(content, this.modalOptions).result.then((result) => {
          this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
      }
   
      private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
          return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
          return 'by clicking on a backdrop';
        } else {
          return  `with: ${reason}`;
        }
      }

      addItem(i:number){
        this.favRepos.push(this.user[i].name);
        localStorage.setItem("favRepo", JSON.stringify(this.favRepos));
        alert(`Added to favourites`);
        
      }
      refresh(){
          this.favRepos = JSON.parse(localStorage.getItem('favRepo'));
      }
      remove(repo:string){
        for(let i = 0 ; i < this.favRepos.length; i++){
          if(this.favRepos[i] == repo){
            this.favRepos.splice(i,1);
            localStorage.setItem("favRepo", JSON.stringify(this.favRepos));
            this.refresh();
            break;
        }      
        }
       
      }
}
