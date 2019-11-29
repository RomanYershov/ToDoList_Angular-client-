import { Tag } from './tag';

export class ToDo{
    id: number;
    name: string = "";
    description: string = "";
    creationDate: any;
    isDone: boolean;
    tags: Tag [] = []
}