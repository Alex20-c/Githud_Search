import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { ProfileService } from '../profile-request/profile.service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  providers:[ProfileService],
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:any=[];
  
  repo:any=[];
  username:string=''

  constructor(private http:HttpClient,private profService:ProfileService) { 
    
  }
  
  getRepo(){
    let promise=new Promise((resolve,reject)=>{
      this.profService.getRepo(this.username).toPromise().then(response=>{
        this.repo=response
        
        resolve()
      },
      error=>{
        reject(error)
      }
      )
    })
   return promise
  }
  
  getUser(){
    let promise=new Promise((resolve,reject)=>{
      this.profService.getUser(this.username).toPromise().then(response=>{
        this.user=response
        
        resolve()
      },
      error=>{
        reject(error)
      }
      )
    })
   return promise
  }

  ngOnInit() {
  }

}
