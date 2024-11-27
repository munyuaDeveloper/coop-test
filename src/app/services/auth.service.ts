import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  signIn(payload: { username: string; password: string }) {
    return this.http.post('https://dummyjson.com/auth/login', payload);
  }
}
