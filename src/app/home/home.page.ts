import { Component } from '@angular/core';
import { AuthenticateService } from '../services/auth.service';
import { CrudService } from '../services/crud.service';
import { Storage, getDownloadURL, ref, uploadBytesResumable } from '@angular/fire/storage';
import { MessageService } from '../services/message.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  items_menu: any = [
    {
      icon: 'home-outline',
      name: 'inicio',
      selected: true,
    },
    {
      icon: 'bookmark-outline',
      name: 'sobre nós',
      selected: false,
    },
    {
      icon: 'book-outline',
      name: 'nossa historia',
      selected: false,
    },
    {
      icon: 'cube-outline',
      name: 'produtos',
      selected: false,
    },
    {
      icon: 'people-outline',
      name: 'clientes',
      selected: false,
    },
    {
      icon: 'call-outline',
      name: 'contato',
      selected: false,
    },
  ];

}
