import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToDo } from '../models/todo';


@Injectable()

export class TodolistService {

  constructor(private http: HttpClient) { }

 private setHeaders(token: string){
    return  new HttpHeaders({ "Authorization": "bearer" + " " + token });
  }

   Get(){
     let token = localStorage.getItem("accessToken");
      if(token == null) return;
     const headers = this.setHeaders(token)
     return this.http.get("https://localhost:5001/api/gettodos", {headers: headers});
   }

   Togle(id:number){
    let token = localStorage.getItem("accessToken");
    if(token == null) return;
   const headers = this.setHeaders(token)
      return this.http.get("https://localhost:5001/api/toggle/" + id, {headers: headers})
      .subscribe(res => console.log(res))
   }

   AddTodo(todo: ToDo){
      const headers = this.setHeaders(localStorage.getItem("accessToken"));
      return this.http.post("https://localhost:5001/api/addtodo/", todo, {headers: headers});
   }


}
