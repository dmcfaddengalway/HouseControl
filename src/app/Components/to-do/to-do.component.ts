import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss', '../../Assets/CSS/_variables.scss']
})

export class ToDoComponent implements OnInit {

    task: string;
    toDoList = [];
    priority: number;

    constructor() {

    }

    ngOnInit() {

    }

    addToDo() {
        this.toDoList.push({name: this.task, completed: false, priority: this.priority});
        //console.log('Added task: ', this.task);
        //console.log('Status: ', this.completed);
        //console.log('Priority:', this.priority);
        this.task = '';
        this.priority = null;
    }

    removeToDo(index) {
        this.toDoList.splice(index, 1);
        console.log("Removed: ", this.task);
    }

    sortPriority() {
        console.log("Sorted by priority");
    }

    sortAlphabeticalTask() {
        console.log("Sorted by alphabetical task");
    }

}