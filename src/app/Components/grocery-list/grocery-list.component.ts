import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.scss', '../../Assets/CSS/sharedStyles.scss']
})

export class GroceryListComponent implements OnInit {

    store: string;
    storeList = ['Aldi', 'Dunnes', 'Tesco', 'Lidl', 'SuperValu', 'Convenience', 'Easons', 'TKMaxx', 'Charity Shop'];
    item: string;
    groceryList = [];
    quantity: number;

    constructor() {

    }

    ngOnInit() {

    }

    addGroceryItem() {
        this.groceryList.push({item: this.item, store: this.store, quantity: this.quantity});
        //console.log('Added task: ', this.task);
        //console.log('Status: ', this.completed);
        //console.log('Priority:', this.priority);
        this.item = '';
        this.quantity = null;
    }

    clearSelected() {
        var checkedBoxes = document.querySelectorAll("input[type=checkboxes]:checked").length;
        console.log('Num of checked checkboses: ', checkedBoxes);
    }

    clearAll() {
        var table = document.getElementsByTagName(table);
        var rowCount = table.rows.length;
        while (table.rowCount.length) {
            table.deleteRow(0);
        }
        console.log("List cleared!");
    }

}