import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Album } from './Album';

import {Observable} from "rxjs";
import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class HttpalbumsService {


  constructor(private http: HttpClient){ }//инжектировали 
  getData(): Observable<Album[]> {
    return this.http.get<any[]>("https://jsonplaceholder.typicode.com/albums").pipe(
      map((res: any[]) => {
        console.log(res);  //  до преобразования
        return res.map(album => new Album(album.title, album.id));
      })
    );
  }
  
}
/*
Смысл использования специального сервиса для работы с http заключается в сокрытии деталей отправки запросов. Компонент же ожидает получить какие-то конкретные данные, например, в виде набора объектов User. С помощью метода map библиотеки rxjs можно преобразовать данные из одного формата в другой.

У результата метода get() мы можем вызвать метод pipe(), который позволяет обработать результаты запроса. Для этого метод pipe в качестве первого параметра принимает функцию обработки данных запроса. В данном случае в роли такой функции выступает оператор map, который преобразует результаты запроса в новые объекты.
*/

