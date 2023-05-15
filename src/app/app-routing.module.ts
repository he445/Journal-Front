import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/LoginPage/login.component';
import { PostComponent } from './pages/homePage/home.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: PostComponent }
  // Outras rotas da sua aplicação
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
