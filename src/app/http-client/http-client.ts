import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-http-client',
  imports: [],
  templateUrl: './http-client.html',
  styleUrl: './http-client.css'
})
export class HttpClientComponent implements OnInit {
  constructor(private http: HttpClient){}
  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(
      (response) => {
        console.log('Response:', response);
      },
      (error) => {
        console.error('Error:', error);
      },
      () => {
        console.log('Request completed');
      }
    )
  }
}
