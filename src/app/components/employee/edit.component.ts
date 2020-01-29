import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: number;
  employee: Employee;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private loginService: LoginService, private EmpService: EmployeeService) {
  }

  Props = {
    IsEditMode: true,
    Title: "Edit Employee"
  };

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params.id;
      console.log(this.id);
    }
    );

    this.EmpService.getEmployee(this.id).subscribe(emp => {
      console.log(emp);
      this.employee = emp
    }
    );
    console.log(this.employee)
  }
}
