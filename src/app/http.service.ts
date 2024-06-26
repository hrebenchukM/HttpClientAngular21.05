import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient){ }//инжектировали 

  getData(){
       //return this.http.get("assets/data.json")
      return this.http.get("assets/data2.json")//отправляет запрос дате2
  }
}

/*
Для отправки запросов сервис получает объект HttpClient. К классу применяется декоратор @Injectable, который гарантирует, что встроенный механизм внедрения зависимостей сможет создать объект этого класса и передать его в качестве зависимости в другой объект (в другой сервис или компонент).

Для выполнения get-запроса у объекта HttpClient вызывается метод get(), в который передается адрес запроса - в нашем случае json-файл с данными.

*/
