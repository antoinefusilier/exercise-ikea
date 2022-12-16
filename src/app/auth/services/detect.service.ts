import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable} from '@angular/core';
import {Router} from '@angular/router';

const Connected = false;

@Injectable({
  providedIn: 'root'
})
export class DetectService {
  connected = true;

  constructor(private http: HttpClient,
    private router: Router
    ) {
      if (this.connected !== true){
        this.firstConnect();
      }
  }
  firstConnect = async() => {
    this.http.get('http://localhost:3008/api/auth/detect/connected', {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': 'http://localhost:4200'
      })
    })
      .subscribe((data: any) => {
        console.log(data)
        if (data.authenticated === true) {
          if (data.user.role === "admin") {
            this.router.navigate(['/auth/redirect']);
          } else if (data.user.role === "user") {
            this.router.navigate(['/home']);
          } else {
            this.router.navigate(['/home']);
          }
          console.log("User is connected")
        }
      });
  }

}
