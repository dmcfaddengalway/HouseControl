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
        // console.log('Added task: ', this.task);
        // console.log('Status: ', this.completed);
        // console.log('Priority:', this.priority);
        this.item = '';
        this.quantity = null;
    }

    clearSelected() {
        let checkedBoxes = document.getElementsByTagName('input[type="checkbox"]');

        console.log('Number of checked checkboxes: ', checkedBoxes);
    }

    clearAll() {
        let tableDisplay = document.getElementsByTagName(table);
        let rowCount = tableDisplay.rows.length;
        while (tableDisplay.rowCount.length) {
            tableDisplay.deleteRow(0);
        }
        console.log("List cleared!");
    }

}