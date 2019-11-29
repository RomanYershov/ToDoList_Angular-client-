import { Component, OnInit } from '@angular/core';
import { TodolistService } from './todolist/services/todolist.service';
import { ToDo } from './todolist/models/todo';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'TodoList';
  isRegistration:boolean;
  toDoList: ToDo [] = [];

  ngOnInit(): void {
    // this.GetToDo();
  }
  
 constructor(){}

  
  
 
 LogOut(){ 
   localStorage.clear();
   this.toDoList = [];
 }



}
