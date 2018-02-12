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
    quantity = 1;

    constructor() {

    }

    ngOnInit() {

    }

    addGroceryItem() {
        if (this.quantity > 0 || this.store == null) {
            this.groceryList.push({item: this.item, store: this.store, quantity: this.quantity});
        } else {
            alert("Sorry you can not order 0 of " + this.item);
            return;
        }
        // console.log('Added task: ', this.item);
        // console.log('Store: ', this.store);
        // console.log('Quantity:', this.quantity);
        this.item = '';
        this.store = this.storeList[0];
        this.quantity = 1;
    }

    clearSelected() {
        const checkedBoxes = Array.prototype.slice.call(document.querySelectorAll('input[type="checkbox"]:checked'));

        console.log(checkedBoxes);
        for(var i = 0; i <= checkedBoxes.length; i++) {
            this.groceryList.splice(i, 1);
        }

    }

    clearAll() {
        this.groceryList = [];
    }

}