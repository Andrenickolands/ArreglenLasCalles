import { Routes } from '@angular/router';
import { DashboardComponent } from './Views/Layouts/A-DashBoard/dashboard.component';
import { LoginComponent } from './Views/Layouts/B-Login/login.component';
import { SignupComponent } from './Views/Layouts/B.1-SignUp/signup.component';
import { AceptTermsComponent } from './Views/Layouts/B.1.1-AceptPolitics/acept-terms.component';
import { LostpassworeComponent } from './Views/Layouts/B.2-LostPasswore/lostpasswore.component';
import { HomeComponent } from './Views/Layouts/C-Home/home.component';
import { ReportsComponent } from './Views/Layouts/D-reports/reports.component';
import { ReportComponent } from './Views/Layouts/D.1-report/report.component';
import { BacheComponent } from './Views/Layouts/D.2-bache/bache.component';
import { CreatedReportComponent } from './Views/Layouts/C.1-created-report/created-report.component';
import { ReportValidateComponent } from './Views/Layouts/C.1.1-report-validate/report-validate.component';
import { AddReportComponent } from './Views/Layouts/C.2-add-report/add-report.component';
import { PinSelectComponent } from './Views/Layouts/C.2.1-pin-select/pin-select.component';
import { CreateReportComponent } from './Views/Layouts/C.2.2-create-report/create-report.component';
import { HelpComponent } from './Views/Layouts/F-help/help.component';
import { ProfileComponent } from './Views/Layouts/G-profile/profile.component';
import { SearchComponent } from './Views/Layouts/E-Search/search.component';



export const routes: Routes = [
    {path:"Dashboard", component: DashboardComponent},
    {path:"Login", component: LoginComponent},
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
    {path: "", component: LoginComponent    },
    {path:"**", redirectTo:"", pathMatch:"full"},
];