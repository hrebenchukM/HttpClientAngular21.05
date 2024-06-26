import { Component } from '@angular/core';
import { HttpClientModule} from "@angular/common/http";

import { HttpRxService } from '../http-rx.service';
import {User} from "../user";

@Component({
  selector: 'app-task3',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './task3.component.html',
  styleUrl: './task3.component.css',
  providers:[HttpRxService]
})
export class Task3Component {
  users: User[]=[];

  constructor(private httpService: HttpRxService){}

  ngOnInit(){

      this.httpService.getUsers().subscribe({next:(data: User[]) => this.users=data});
  }
}


