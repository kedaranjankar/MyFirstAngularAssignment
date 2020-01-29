import { Injectable, OnInit } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Employee } from '../models/employee.model'
import {
    Observable
} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class EmployeeService implements OnInit
{
  constructor(private http:HttpClient){}
  ngOnInit(){}

  getAllEmployees(){
      return this.http.get<Employee[]>('http://localhost:3000/employees').catch(this.HandleError);
  }

  getEmployee(id){
      return this.http.get<Employee>('http://localhost:3000/employees/'+id).catch(this.HandleError);
  }

  getEmployeeByName(EmpName){
    return this.http.get<Employee>('http://localhost:3000/employees/?user_name='+EmpName);
}

  deleteEmployee(id){
      return this.http.delete<Employee>('http://localhost:3000/employees/'+id).catch(this.HandleError);;
  }

  updateEmployee(emp:Employee){
      let body = JSON.stringify(emp);
      return this.http.put('http://localhost:3000/employees/'+emp.id,body,httpOptions).catch(this.HandleError);
  }

  createEmployee(emp:Employee){
      let body = JSON.stringify(emp);
      delete emp.id;
      return this.http.post<Employee>('http://localhost:3000/employees/',body,httpOptions).catch(this.HandleError);;
  }

  HandleError(HandleError: any): Observable<any> {
    throw new Error(HandleError);
}

}
