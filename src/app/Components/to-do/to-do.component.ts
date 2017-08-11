import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss', '../../Assets/CSS/_variables.scss']
})
export class ToDoComponent implements OnInit {

    task: string;
    toDoList = [];

    constructor() {

    }

    ngOnInit() {

    }

    addToDo() {
        this.toDoList.push({name: this.task});
        //console.log('Added task: ', this.task); TESTS IF VALUE IS GOTTEN FROM INPUT
        this.task = '';
    }

    removeToDo() {
        console.log("Removed: ", this.task);
    }

}