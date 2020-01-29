import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';

@Pipe({
  name: 'employeeSearch'
})
export class EmployeeSearchPipe implements PipeTransform {

  transform(employees: Employee[], searchphoneField: string,searchNameField:string): Employee[] {
    if (!employees || (!searchphoneField && !searchNameField)) {
      return employees;
    }
    if(searchphoneField){
      return employees.filter(
        employee =>
          employee.phone_no.indexOf(searchphoneField) !== -1
      );
      }
      if(searchNameField){
        return employees.filter(
          employee =>
            (employee.first_name + employee.last_name).toLowerCase().indexOf(searchNameField.toLowerCase()) !== -1
        );
        }
    if(searchphoneField && searchNameField){
    return employees.filter(
      employee =>
        employee.phone_no.indexOf(searchphoneField) !== -1 && (employee.first_name + employee.last_name).toLowerCase().indexOf(searchNameField.toLowerCase()) !== -1
    );
    }
  }

}
