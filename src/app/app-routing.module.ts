import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/LoginPage/login.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  // Outras rotas da sua aplicação
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
