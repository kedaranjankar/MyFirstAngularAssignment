import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { RegisterComponent } from './components/login/register.component';
import { ChangePasswordComponent } from './components/login/change-password.component';
import { ViewComponent } from './components/employee/view.component';
import { EditComponent } from './components/employee/edit.component';
import { ViewListComponent } from './components/employee/view-list.component';

import { EmployeeService } from './services/employee.service'
import { LoginService } from './services/login.service';
import { JwPaginationComponent } from 'jw-angular-pagination';
import { AuthGuard } from './gaurds/auth.guard';
import { FilterPipe } from './filter.pipe';
import { EmployeeTemplateComponent } from './components/Common/employee-template/employee-template.component';
import { EmployeeSearchPipe } from './components/Common/employee-search.pipe';


const appRoutes : Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'change-password', component: ChangePasswordComponent },
  { path: 'main', component: MainComponent, canActivate: [AuthGuard] },
  { path: 'employee/view/:id', component: ViewComponent, canActivate: [AuthGuard] },
  { path: 'employee/edit/:id', component: EditComponent, canActivate: [AuthGuard] },
  { path: 'employee/view', component: ViewListComponent, canActivate: [AuthGuard] }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    RegisterComponent,
    ChangePasswordComponent,
    ViewComponent,
    EditComponent,
    ViewListComponent,
    JwPaginationComponent,
    FilterPipe,
    EmployeeTemplateComponent,
    EmployeeSearchPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [EmployeeService, LoginService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
