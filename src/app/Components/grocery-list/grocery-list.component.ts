import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.scss', '../../Assets/CSS/sharedStyles.scss']
})

export class GroceryListComponent implements OnInit {

    store: string;
    storeList = ['Aldi', 'Dunnes', 'Tesco', 'Lidl', 'SuperValu'];
    item: string;
    groceryList = [];
    quantity: number;
    table;

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
        this.store = this.storeList[0];
        this.quantity = null;
    }

    clearSelected() {
        const checkedBoxes = document.getElementsByTagName('input[type="checkbox"]');

        console.log('Number of checked checkboxes: ', checkedBoxes);
    }

    clearAll() {
        this.groceryList = [];
    }

}