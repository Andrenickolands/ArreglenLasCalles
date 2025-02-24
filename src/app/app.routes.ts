import { Routes } from '@angular/router';
import { LoginComponent } from './Views/Login/login.component';
import { DashboardComponent } from './Views/DashBoard/dashboard.component';
import { HomeComponent } from './Views/Home/home.component';
import { SignupComponent } from './Views/Login/SignUp/signup.component';
import { AceptTermsComponent } from './Views/Login/SignUp/AceptPolitics/acept-terms.component';
import { LostpassworeComponent } from './Views/Login/LostPasswore/lostpasswore.component';
import { SearchComponent } from './Views/Search/search.component';
import { HelpComponent } from './Views/help/help.component';
import { ProfileComponent } from './Views/profile/profile.component';
import { ReportsComponent } from './Views/reports/reports.component';
import { ReportComponent } from './Views/reports/report/report.component';
import { BacheComponent } from './Views/reports/bache/bache.component';
import { CreatedReportComponent } from './Views/created-report/created-report.component';
import { ReportValidateComponent } from './Views/created-report/report-validate/report-validate.component';
import { AddReportComponent } from './Views/add-report/add-report.component';
import { PinSelectComponent } from './Views/add-report/pin-select/pin-select.component';
import { CreateReportComponent } from './Views/add-report/create-report/create-report.component';

export const routes: Routes = [
    {path:"dashboard", component: DashboardComponent},
    {path:"login", component: LoginComponent},
    {path:"Signup", component: SignupComponent},
    {path:"Acept-terms", component: AceptTermsComponent},
    {path:"Lost-passwore", component: LostpassworeComponent},
    {path:"Home", component: HomeComponent},
    {path:"Help", component: HelpComponent},
    {path:"Profile", component: ProfileComponent},
    {path:"Search", component: SearchComponent},
    {path:"Reports", component: ReportsComponent},
    {path:"Report", component: ReportComponent},
    {path:"Bache", component: BacheComponent},
    {path:"Created-report", component: CreatedReportComponent},
    {path:"Validated-report", component: ReportValidateComponent},
    {path:"Add-report", component: AddReportComponent},
    {path:"Pin-select", component: PinSelectComponent},
    {path:"Create-report", component: CreateReportComponent},
    {path: "", component: HomeComponent},
    {path:"**", redirectTo:"", pathMatch:"full"},
];