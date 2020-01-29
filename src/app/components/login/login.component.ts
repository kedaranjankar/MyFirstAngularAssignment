import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription'
import { LoginDetails } from '../../models/login-details.model'
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  loggedIn: boolean;
  subscription: Subscription;
  errorMessage: string;
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    let ld: LoginDetails = this.loginService.getLoginDetails();
    if (ld.isLoggedIn) {
      this.router.navigate(['main']);
    }
  }
  onSubmit() {
    this.errorMessage = '';
    this.loginService.login(this.username, this.password)
      .pipe(first())
      .subscribe(
        data => {
          if (data != null) {
            if (data.isLoggedIn) {
              this.router.navigate(["main"]);
            }
          }
        },
        error => {
          console.log(error);
        });
  }
}
