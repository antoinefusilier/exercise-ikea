import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders, HttpClientModule} from '@angular/common/http';
// import { HttpClient } from '@angular/common/http';
// import { HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent implements OnInit {

  serverMessages: Object = {};
  constructor(
    private http: HttpClient,
    ) {
    // let httpHeader = new HttpHeaders().set('Access-Control-Allow-Origin', 'false');
    // this.http.get<any>('http://127.0.0.1:3008/api/init', )
      // .then(response => response.json())
    // .subscribe((data) => {console.log('DATA::'+data)});
    // test.subscribe((data) => {console.log('DATA::'+data)});
    // .subscribe((data) => {
      // console.log(data);
      // this.serverMessages = data;
    // });
   }

  ngOnInit(): void {

    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*'
    });
    this.http.get<any>('http://127.0.0.1:3008/testing', {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': 'http://localhost:4200'
      })
    })
    .subscribe((data) => {console.log('DATA::'+data.connected + "Connected? ::" + data.connected)});

  }

}
