import { Component } from '@angular/core';
import { AuthenticateService } from '../services/auth.service';
import { CrudService } from '../services/crud.service';
import { Storage, getDownloadURL, ref, uploadBytesResumable } from '@angular/fire/storage';
import { MessageService } from '../services/message.service';
import { Router } from '@angular/router';
import { APIService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePagen implements OnInit, ViewInit {

  constructor(
    public apiService: APIService 
  ){
    this.carregarPaises();
  }

  carregarPaises() {
    this.apiService.get('name/brazil').subscribe((resp)=>{
      console.log(resp);
    })
  }
  
  

}
