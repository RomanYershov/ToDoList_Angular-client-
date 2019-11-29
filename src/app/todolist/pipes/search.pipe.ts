import { PipeTransform, Pipe } from '@angular/core';
import { ToDo } from '../models/todo';

@Pipe({name:'search'})

export class SearchPipe implements PipeTransform{
    transform(todoList , val) : any{
        return todoList.filter(todo => {
           return  (<string>todo.Name).includes(val);
         });
    }

}