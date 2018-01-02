import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cleaning',
  templateUrl: './cleaning.component.html',
  styleUrls: ['./cleaning.component.scss', '../../Assets/CSS/sharedStyles.scss']
})

export class CleaningComponent implements OnInit {

    task: string;
    taskList = [];

    constructor() { }

    ngOnInit() {

    }

    addToList() {
        if(this.task != null) {
            this.taskList.push({name: this.task});
        }
    }
}
