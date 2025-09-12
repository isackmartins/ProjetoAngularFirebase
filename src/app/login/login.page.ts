import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm!: FormGroup; // <--- corrigido com operador '!' para TS

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastCtrl: ToastController
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  async onLogin() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;

      // Aqui você coloca a lógica de login real (API/Firebase)
      if (email === 'teste@teste.com' && password === '123456') {
        this.router.navigate(['/home']); // redireciona para a tela inicial
      } else {
        const toast = await this.toastCtrl.create({
          message: 'Email ou senha incorretos!',
          duration: 2000,
          color: 'danger',
        });
        await toast.present();
      }
    }
  }
}
