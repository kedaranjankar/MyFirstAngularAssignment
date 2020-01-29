import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeService } from 'src/app/services/employee.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  @ViewChild("changePwdForm", { static: false })
  public changePwdForm: NgForm;
  constructor(private employeeService: EmployeeService, private loginService:LoginService,
    private router: Router,
    private route: ActivatedRoute) { }

    employee: Employee;
    oldPassword:string;
    newPassword:string;
    confirmPassword:string;
    errorMessage:string;

    private getEmployeeDetails(userName: string) {
      this.employeeService.getEmployeeByName(userName).subscribe(
        employee => {
          this.employee = employee[0];
        },
        (err: any) => {
          console.log(err);
        }
      );
       
    }
  changePassword(): void {
    debugger
    if (this.changePwdForm.valid) {
      if (this.employee.password !== this.oldPassword) {
        this.errorMessage ="Old password is wrong!"
        alert(this.errorMessage);
      }
      else if (this.newPassword !==this.confirmPassword) {
        this.errorMessage ="New password and confirm password doesnot match!"
        alert(this.errorMessage);
      }
      else{
        this.errorMessage ="";
        this.employee.password =this.newPassword;
        this.employeeService.updateEmployee(this.employee).subscribe(() => {
          alert("Password changed successfully");
          this.router.navigate(["main"]);
        });
      }
    }
  }
  Cancel():void{
    this.router.navigate(["main"]);
  }
  ngOnInit() {
   var logindetail= this.loginService.getLoginDetails();
   this.getEmployeeDetails(logindetail.loggedInUser);
  }
}
