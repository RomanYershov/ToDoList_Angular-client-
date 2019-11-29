import { Component, OnInit, Input } from '@angular/core';
import { ToDo } from '../../models/todo';
import { TodolistService } from '../../services/todolist.service';
import { LoginService } from '../../services/login.service';
import { Tag } from '../../models/tag';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  toDoList: ToDo[] = [];
  isDone: boolean;
  todo: ToDo = new ToDo();
  stringTags: string;
  searchInpValue: string = '';

  constructor(private todoService: TodolistService, private loginService: LoginService) { }

  ngOnInit() {
    this.GetToDo(); 
  }


  GetToDo() {
    this.todoService.Get().subscribe((data: ToDo[]) => {
      this.toDoList = data;
      console.log(data)
    });
  }
  Add(){
    var tags = this.getTagsBySting(this.stringTags);
    this.todo.tags = tags;
    console.log(this.todo)
    this.todoService.AddTodo(this.todo)
    .subscribe((res: any) => {
      if(res.StatusCode === 201){
        this.GetToDo();
        this.todo.name = this.todo.description = "";
      }
    })
  }
  Done(id: any) {
    console.log(id)
    this.todoService.Togle(id)
  }

  LogOut() {
    this.loginService.LogOut();
  }

  private getTagsBySting(strTags: string) : Tag [] {
     let tags :Tag [] =  [];
     if(!strTags)return tags;
     let resArr = strTags.split(',');
    resArr.forEach(tagName => {
      let tag = new Tag();
      tag.name = tagName.trim();
      tags.push(tag);
    });
    return tags;
  }

}
