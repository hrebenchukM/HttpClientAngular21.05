import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Task1Component } from './task1/task1.component';
import { Task2Component } from './task2/task2.component';
import { Task3Component } from './task3/task3.component';
import { HttpRequest04Component } from './http-request04/http-request04.component';
import { AlbumsComponent } from './albums/albums.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,Task1Component,Task2Component,Task3Component,HttpRequest04Component,AlbumsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'serv';
}
