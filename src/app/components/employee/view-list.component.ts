import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/models/employee.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-list',
  templateUrl: './view-list.component.html',
  styleUrls: ['./view-list.component.css']
})
export class ViewListComponent implements OnInit {

  constructor(private loginService: LoginService,private router: Router,private activatedRoute: ActivatedRoute, private EmpService: EmployeeService) { }

  emplist: Employee[];
  pageOfItems: Array<any>;
  PageSize:Number = 15;

  ngOnInit() {
    this.EmpService.getAllEmployees().subscribe((data) => {
      this.emplist = data
      console.log(this.emplist);
    })
  }

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }

  filterEmployees(searchString: string) {
    return this.pageOfItems.filter((employee) =>
      employee.first_name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1
    );
  }

  SetPageSize(NoOfRecordsPerPage)
  {
    console.log(NoOfRecordsPerPage);
    this.PageSize = NoOfRecordsPerPage;
  }

  deleteEmp(employeeId: number)
  {
    this.EmpService.deleteEmployee(employeeId).subscribe(
      () => {
        this.EmpService.getAllEmployees().subscribe(
          (employees: Employee[]) => {
            this.emplist = employees;
            alert("Deleted Employee - " + employeeId)
            this.router.navigate(['/employee/view']);
          });
      },
      err => {
        console.log(err);
      }
    );
  }


}
