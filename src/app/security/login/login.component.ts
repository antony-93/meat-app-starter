import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { NotificationService } from 'app/shared/messages/notification.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Console } from '@angular/core/src/console';

@Component({
  selector: 'mt-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup
  navigateTo: string

  constructor(private fb: FormBuilder, 
    private loginService: LoginService,
    private notificationService: NotificationService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.doCreateLoginForm();
    this.navigateTo = this.activatedRoute.snapshot.params['to'] || btoa('/')
  }

  //#region === FUNCOES DO FORMULARIO ===

  doCreateLoginForm() {
    this.loginForm = this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.email]),
      password: this.fb.control('', [Validators.required])
    })
  }
  
  doClearLoginForm() {
    if (this.loginForm) {
      this.loginForm.reset();
      this.doCreateLoginForm();
    }
  }

  doSetLoginForm(login: any) {

  }

  //#endregion

  private login(email, password){
    this.loginService.login(email, password)
      .subscribe(user => 
                    this.notificationService.notify(`Bem vindo, ${user.name}`),
                  response => 
                    this.notificationService.notify(response.error.message),
                  () =>{
                    this.router.navigate([atob(this.navigateTo)])
                  })
  }

  doLogin(login: any) {
    if (!login) {
      this.doClearLoginForm
    }

    if (!this.loginForm.valid) {
      this.doClearLoginForm
    }

    this.login(login.email, login.password)
  }


}
