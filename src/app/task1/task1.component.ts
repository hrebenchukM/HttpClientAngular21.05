
import { Component, OnInit} from "@angular/core";
import { HttpClient, HttpClientModule} from "@angular/common/http";
import {User} from "../user";

@Component({
  selector: 'app-task1',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './task1.component.html',
  styleUrl: './task1.component.css'
})
export class Task1Component {
  user: User | undefined;//ожидаю от сервера только один обьект типа юзер

  constructor(private http: HttpClient){} // получение сервиса HttpClient !

  ngOnInit(){

      this.http.get("assets/data.json").subscribe({next:(data:any) => this.user=new User(data.name, data.age)});
  }
}

/*
В данном случае в шаблоне выводятся данные объекта User, которые мы хотим получить с сервера. Однако загрузка данных, скажем, в конструкторе компонента не очень желательна.
 В этом плане метод ngOnInit(), который определен в интерфейсе OnInit и который вызывается при инициализации компонента представляет более предпочтительное место для загрузки данных. В конструкторе же мы просто получаем сервис HttpClient.

Далее в методе ngOnInit() получаем данные из сервиса. Сам метод http.get() возвращает объект Observable<Object>. Observable представляет своего рода поток, и для прослушивания событий из этого потока применяется метод subscribe. 
Этот метод определяет действие над результатом запроса - полученными с сервера данными. В данном случае действие определено с помощью параметра next в виде стрелочной функции.

*/
