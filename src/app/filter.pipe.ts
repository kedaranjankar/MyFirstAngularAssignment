import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from './models/employee.model';

@Pipe({
  name: 'Employeefilter'
})
export class FilterPipe implements PipeTransform {

  transform(Employees: Employee[], SearchText:string): Employee[] {
    
    if(!Employees || !SearchText)
    {return Employees;}
    return Employees.filter(emp=> emp.first_name.toLocaleLowerCase().indexOf(SearchText.toLocaleLowerCase())!== -1);
  }

}
