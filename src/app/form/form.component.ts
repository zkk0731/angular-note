import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  loginForm = new FormGroup({
    account: new FormControl('', Validators.required),
    pwd: new FormControl('', Validators.required),
  });

  accountControl: FormControl = this.loginForm.get('account') as FormControl;
  pwdControl: FormControl = this.loginForm.get('pwd') as FormControl;

  // invalid(): boolean {
  //   if (
  //     this.accountControl?.hasError('required') ||
  //     this.pwdControl?.hasError('required')
  //   ) {
  //     return false;
  //   }
  //   return true;
  // }

  submit() {
    const accountControl = this.loginForm.get('account');
    console.log(accountControl?.value);
  }
}
