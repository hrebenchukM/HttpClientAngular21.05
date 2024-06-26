import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "./user";
import {Observable} from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class HttpRxService {

  constructor(private http: HttpClient){ }

    getUsers() : Observable<User[]>
    {
        return this.http.get("assets/data3.json").pipe(map((data:any)=>{
            let usersList = data["userList"];
            return usersList.map(function(user: any): User
            {
                return new User(user.userName, user.userAge);
            });
        }));
    }
}
/*
Смысл использования специального сервиса для работы с http заключается в сокрытии деталей отправки запросов. Компонент же ожидает получить какие-то конкретные данные, например, в виде набора объектов User. С помощью метода map библиотеки rxjs можно преобразовать данные из одного формата в другой.

У результата метода get() мы можем вызвать метод pipe(), который позволяет обработать результаты запроса. Для этого метод pipe в качестве первого параметра принимает функцию обработки данных запроса. В данном случае в роли такой функции выступает оператор map, который преобразует результаты запроса в новые объекты.
*/
