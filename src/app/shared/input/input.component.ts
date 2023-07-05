import { AfterContentInit, Component, ContentChild, Input, OnInit } from '@angular/core';
import {FormControlName, NgModel} from '@angular/forms'
import { LoginService } from 'app/security/login/login.service';

@Component({
  selector: 'mt-input-container',
  templateUrl: './input.component.html',
})
export class InputComponent implements OnInit, AfterContentInit {

  @Input() label: string
  @Input() errorMessage: string
  @Input() showTip: boolean = true

  input: any

  @ContentChild(NgModel) model: NgModel
  @ContentChild(FormControlName) control: FormControlName

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.input = this.model || this.control
    if(this.input === undefined){
      throw new Error('Esse componente precisa ser usado com uma diretiva NgModel ou FormControlName')
    }
  }

  /*isLoggedIn(): boolean{
    return this.loginService.isLoggedIn()
  }

  hasDisabled(): string{
    if(this.isLoggedIn){
      return this.input = 'disabled=""'
    }
  }*/

  hasSuccess(): boolean {
    return this.input.valid && (this.input.dirty || this.input.touched)
  }

  hasError(): boolean {
    return this.input.invalid && (this.input.dirty || this.input.touched)
  }
}
