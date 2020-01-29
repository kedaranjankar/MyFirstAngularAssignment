import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './services/employee.service'
import { LoginService } from './services/login.service'
import { Employee } from './models/employee.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private emp:EmployeeService, private loginS:LoginService){}

  ngOnInit(){
  }
}
