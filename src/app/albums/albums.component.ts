import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpalbumsService } from '../httpalbums.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [HttpClientModule,JsonPipe],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css',
  providers: [HttpalbumsService]
})
export class AlbumsComponent {

  res: any;

  constructor(private httpService: HttpalbumsService){}

  ngOnInit() {

    this.httpService.getData().subscribe({ next: (res: any) => {   console.log(res);   this.res=res} });
 
 }

}












