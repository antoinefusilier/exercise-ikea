import { ExpressionType } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

const Connected = true;

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.scss']
})


export class RedirectComponent implements OnInit {

  closeResult: string = '';
  redirect = false;
  connected = false;

  constructor(private router: Router) {
    this.connected = Connected;
  }

  ngOnInit(): void {
    if (this.connected !== true){
          this.waitToRedirect();
      // $('input[name=redirectOnly]').removeAttr('checked')
      console.log($('input[name=redirectOnly]').val('on'));
      if ($('input[name=redirectOnly]').val() == 'on'){
        console.log("Redirect Only");
      setTimeout(() => {
        this.router.navigate(['/admin']);
      }, 4000);}
    } else {
      return;
    }

  }
  waitToRedirect(){
    let interval:any;
    let waitToRedirect = 4;
    $('#progress_continue').css('transition', '4s');
    $('#progress_continue').width( "100%");
    console.log("waitToRedirect: " + waitToRedirect);

  }

}
