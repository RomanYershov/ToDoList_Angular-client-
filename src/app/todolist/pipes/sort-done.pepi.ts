import { PipeTransform, Pipe } from '@angular/core';
import { ToDo } from '../models/todo';

@Pipe({name: 'sortIsDonePipe'})

export class SortDonePipe implements PipeTransform{
    transform(toDoList:  any) {
        // let todos = toDoList.filter((todo: any) =>  !todo.IsDone);
        // console.log(todos)
        // return todos;
        return toDoList.filter(a => a.IsDone);
       
    }

}