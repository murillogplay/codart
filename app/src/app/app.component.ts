import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  public title:string = "Codart";
  public result: string  = '';
  public name: string = '';

  constructor(private http: HttpClient) {

  }

  public keyup(){
    this.http.get('/api/message?name=' + this.name,{ responseType:'text'}).subscribe(
      data  =>{
        console.log(data);
        this.result =  data;
      }
    );
  }
}
