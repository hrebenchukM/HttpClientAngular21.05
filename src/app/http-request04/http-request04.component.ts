
import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpRequestService } from '../http-request.service';

@Component({
  selector: 'app-http-request',
  standalone:true,
  imports: [HttpClientModule],
  templateUrl: './http-request04.component.html',
  providers: [HttpRequestService]
})
export class HttpRequest04Component {
  res: any;

  constructor(private httpService: HttpRequestService){}

  ngOnInit() {

    this.httpService.getData().subscribe({ next: (res: any) => {   console.log(res);   this.res=res} });
 
 }

}










