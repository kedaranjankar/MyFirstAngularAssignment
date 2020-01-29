import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';
import { Form, NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { State } from 'src/app/models/State.Model';

@Component({
  selector: 'app-employee-template',
  templateUrl: './employee-template.component.html',
  styleUrls: ['./employee-template.component.css']
})
export class EmployeeTemplateComponent implements OnInit, OnChanges {

  @Input()
  props: any[];

  @Input()
  Title: string;
  @Input()
  IsEditMode: boolean;

  @Input()
  employee: Employee;

  constructor(private EmpService: EmployeeService, private activatedRoute: ActivatedRoute, private router: Router,
    private route: ActivatedRoute) {
    this.employee = new Employee(); 
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      debugger
      this.employee.id = params.id;
      console.log(this.employee.id);

      if (this.employee.id != undefined) {
        this.EmpService.getEmployee(this.employee.id).subscribe(emp => {
          console.log(emp);
          this.employee = emp
        }
        );
      }
    }
    );
  }

  ngOnChanges() {

  }

  states: State[] = [
    { id: 1, name: 'Maharashtra' },
    { id: 2, name: 'Goa' },
    { id: 3, name: 'Kerala' },
    { id: 4, name: 'Punjab' },
    { id: 5, name: 'Rajasthan' },
    { id: 6, name: 'Tamil Nadu' },
    { id: 7, name: 'Telangana' },
    { id: 8, name: 'Andhra Pradesh' },
    { id: 9, name: 'Assam' },
    { id: 10, name: 'Gujarat' }
  ];

  onSubmit(FrmEmp: NgForm) {

    console.log(FrmEmp.value);
    debugger
    this.employee = new Employee();
    this.employee.id = FrmEmp.value.Ueid;
    this.employee.first_name = FrmEmp.value.Fname;
    this.employee.last_name = FrmEmp.value.Lname;
    this.employee.user_name = FrmEmp.value.Uname;
    this.employee.password = FrmEmp.value.Upasword;
    this.employee.address = FrmEmp.value.UAdd;
    this.employee.phone_no = FrmEmp.value.UPhone;
    this.employee.email = FrmEmp.value.Uemail;
    this.employee.city = FrmEmp.value.Ucity;
    this.employee.dob = FrmEmp.value.Udob;
    this.employee.state = FrmEmp.value.Ustate;
    this.employee.zip_code = FrmEmp.value.Uzipcode;
    this.employee.is_admin = false;

    if (this.props["IsEditMode"]) {
      this.EmpService.updateEmployee(this.employee).subscribe((emp: Employee) => {
        alert("Employee Updated");
      }
      )
    }
    else {
      this.EmpService.createEmployee(this.employee).subscribe((emp: Employee) => {
        alert("Employee Created");
      }
      )
    }
    this.router.navigate(["employee/view"]);
  }
}
