import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email, Validators.maxLength(320)]),
    senha: new FormControl('', [Validators.required, Validators.maxLength(100)]),
  });

  constructor(private authService: AuthService, private router: Router) { }

  async handleFormSubmit () {
    if (this.loginForm.value.email && this.loginForm.value.senha) {
      let response = await this.authService.login(this.loginForm.value.email, this.loginForm.value.senha); 
      if (response?.status === 200) {
        console.log("logado com sucesso");
        this.router.navigate(['']); 

      }
    }
  }

  ngOnInit() {
  }

}
