import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Subscription } from 'rxjs/Subscription';
import { LoginDetails } from 'src/app/models/login-details.model';
import { NgForm } from '@angular/forms';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @ViewChild('Regis', { static: false }) signupForm: NgForm;
  
  emp:Employee;
  loginDetails:LoginDetails;
 
  constructor(private loginService:LoginService) { 
    this.loginDetails = this.loginService.getLoginDetails();
  }
  Props = {
    IsEditMode: true,
    Title: "Register New Employee here"
  };
  ngOnInit() {

  }

  // onSubmit() {
  //   //this.signupForm. = this.signupForm?.value?.userData?.username;
  //   this.emp.first_name = this.signupForm.value.first_name;
  //   this.emp.last_name = this.signupForm.value.last_name;

  //   console.log(this.emp.first_name);
  //   console.log(this.emp.last_name);

  //   this.signupForm.reset();

  // }

   onSubmit(form: NgForm) {
    console.log(form);
  }


}
