import { Component, OnInit, OnDestroy } from '@angular/core'
import { RouterLink } from '@angular/router'
import { LoginService } from '../../services/login.service'
import { Subscription } from 'rxjs/Subscription'
import { LoginDetails } from '../../models/login-details.model'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit{

  subscription:Subscription;
  loginDetails:LoginDetails;
  
constructor(private loginService:LoginService) {
    this.loginDetails = new LoginDetails();
  }

  ngOnInit() {
    this.loginDetails = this.loginService.getLoginDetails();
    // this.subscription = this.loginService.getObs().subscribe(x=> {
    //   this.loginDetails=x;
    //   console.log('Header init' +this.loginDetails);
    // } );

  }

  // ngOnDestroy() {
  //     this.subscription.unsubscribe();
  //  }

   logout()
   {
     this.loginService.logout();
   }

}
