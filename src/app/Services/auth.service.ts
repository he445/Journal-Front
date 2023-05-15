import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://localhost:7272/api/';

  constructor(private http: HttpClient, private router: Router) {}

  signIn(email: string, password: string) {
    const body = {
      email: email,
      password: password,
      name: ''
    };

    return this.http.post<any>(`${this.apiUrl}/CreateIdentityToken`, body);
  }

  signOut() {
    localStorage.clear();
    this.router.navigate(['/']);
  }

  isLoggedIn() {
    return !!localStorage.getItem('@Context:user');
  }
}
