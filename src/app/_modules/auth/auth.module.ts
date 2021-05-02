import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

@NgModule({
  imports: [],
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent
  ],
})
export class AuthdModule {}
