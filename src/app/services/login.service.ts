import { Injectable, Output  } from '@angular/core'
import { Subject } from 'rxjs/Subject'
import { Observable } from 'rxjs/Observable'
import { LoginDetails } from '../models/login-details.model'
import { EmployeeService } from './employee.service';
import { map } from 'rxjs/operators';

@Injectable()
export class LoginService{

  private subject = new Subject<LoginDetails>();
  private loginDetails : LoginDetails;

  ngOnInit(): void {
    this.loginDetails = JSON.parse(localStorage.getItem('currentUser'));
  }

  constructor(private employeeService: EmployeeService){
    
    this.loginDetails = JSON.parse(localStorage.getItem('currentUser'));
    if (this.loginDetails == null) {
      this.loginDetails = new LoginDetails();
    }
  }

  getObs = function(){
    return this.subject.asObservable();
  }

  getLoginDetails = function(){
    return this.loginDetails;
  }

  
  login(username: string, password: string) {
    return this.employeeService.getEmployeeByName(username)
      .pipe(map(employees => {
        if (employees != null) {
          var employee = employees[0];
          this.loginDetails.isAdmin = employee.is_admin;
          this.loginDetails.loggedInUser = employee.user_name;
          this.loginDetails.isLoggedIn = employee.password === password;
          this.subject.next(this.loginDetails);
          localStorage.setItem('currentUser', JSON.stringify(this.loginDetails));
          return this.loginDetails;
        }
      }));
  }

  logout = function(){
    this.loginDetails.loggedInUser ="";
    this.loginDetails.isAdmin=false;
    this.loginDetails.isLoggedIn=false;
    localStorage.removeItem('currentUser')
  }
}
