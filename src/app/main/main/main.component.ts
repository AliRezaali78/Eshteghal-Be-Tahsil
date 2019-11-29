import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private authService: AuthService, http: HttpClient) {
    http.post('https://jsonplaceholder.typicode.com/todos/1', { test: 'test' }).subscribe(
      res => console.log(res)
    )
  }

  ngOnInit() {
  }

  get currentUser() {
    return this.authService.currentUser;
  }

}
