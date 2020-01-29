import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from '../../services/login.service'
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})

export class ViewComponent implements OnInit {
  id: number;
  employee: Employee;
  constructor(private activatedRoute: ActivatedRoute, private loginService: LoginService, private EmpService: EmployeeService) {
  }

  Props = {
    IsEditMode: false,
    Title: "View Employee"
  };

  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {
      this.id = params.id;
      console.log(this.id);

      this.EmpService.getEmployee(this.id).subscribe(emp => {
        console.log(emp);
        this.employee = emp
      }
      );
    }
    );


    console.log(this.employee)
  }

}
