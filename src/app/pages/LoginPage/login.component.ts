import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  handleSubmit() {
    if (!this.email || !this.password) {
      alert('Enter email and password');
      return;
    }

    const data = {
      email: this.email,
      password: this.password,
      name: ''
    };

    this.authService.signIn(data.email, data.password)
      .subscribe(() => {
        this.router.navigate(['/home']);
      });
  }
}
