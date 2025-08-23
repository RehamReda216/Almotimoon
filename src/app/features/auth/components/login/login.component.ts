import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { catchError, delay, tap, throwError } from 'rxjs';
import { ButtonComponent } from '../../../../shared/components/button/button.component';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,RouterLink,ButtonComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
    loginForm!:FormGroup;
     errorLoginMessage:string='';
constructor(private fb:FormBuilder , private _Router : Router){
}
ngOnInit(): void {
    // ============ Initailize form group: 
    this.loginForm = this.fb.group(
      {
        email:[null,[Validators.required,Validators.email]],
        password:[null,[Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).+$/)]],
     
      }
    )

}
loginOperation(){
  this.errorLoginMessage = '';
  const {email,password} = this.loginForm.value;
  console.log(this.loginForm
  );
  
  if (this.loginForm.invalid) {
    this.errorLoginMessage = 'user email or password is incorrect!';
    return;
  }
//     this._Auth.signIn(email,password).pipe(tap((res)=>{
//       if (res && res.length > 0) {
//         const user = res[0];
//         // store the result in local storage : 
//         this._Localstorage.storeLoggedUser(user);
//       }
//     }),
//     delay(2500),
//     tap((res)=>{
//       console.log(res);
      
//       if (res && res.length > 0) {
        
//         const role=res[0].role;
//         this.checkTheRole(role);
//         // this._Toastr.showSuccessToastr('Congeratulations!You logged in Successfuly!');
//   }else{
//    this.errorLoginMessage = 'This user is not exist please create an account!';
//   }
// }),catchError((error: HttpErrorResponse) => {
//   // if (error.status === 0) {
//   //   this._Toastr.showErrorToastr('⚠️ Unable to connect to the server. Please check your internet connection or try again later.');
//   // } else {
//   //   this._Toastr.showErrorToastr('An unexpected error occurred. Please try again.');
//   // }
//   return throwError(() => error);
// }))
// .subscribe({complete:()=>{
//   this.loginForm.reset();
// }});
}
checkTheRole(role:string){
  if (role === 'admin') {
  this._Router.navigate(['/admin']);
  
}else if (role === 'customer') {
  
  this._Router.navigate(['/customer']);
}
}
}
