import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  usuario: any = {
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  }

  message: any;

  constructor(
    public apiservice: ApiService,
    private router: Router 
  ){}

  registrar() {
    this.apiservice.post('usuario/registrar', this.usuario).subscribe((resp: any) => {
      this.message = resp;
      alert('Usuário registrado com sucesso!');
  
      // Salva o nome do usuário no localStorage
      localStorage.setItem('user_name', this.usuario.name);
  
      this.router.navigate(['/posts']);
    });
  }
  }

