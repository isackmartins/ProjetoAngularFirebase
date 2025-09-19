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
    this.apiservice.post('usuario/registrar', this.usuario).subscribe({
      next: (resp: any) => {
        alert('Usuário registrado com sucesso!');
        localStorage.setItem('user_name', this.usuario.name);
        this.router.navigate(['/posts']);
      },
      error: (err) => {
        // Se já existir, tenta logar
        if (err.status === 422) {
          this.apiservice.post('usuario/login', {
            email: this.usuario.email,
            password: this.usuario.password
          }).subscribe({
            next: (loginResp: any) => {
              alert('Login realizado com sucesso!');
              localStorage.setItem('user_name', loginResp.name);
              this.router.navigate(['/posts']);
            },
            error: () => {
              alert('Erro ao logar. Verifique suas credenciais.');
            }
          });
        } else {
          alert('Erro inesperado ao registrar usuário.');
        }
      }
    });
  }
  }

