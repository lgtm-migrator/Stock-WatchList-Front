import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.css']
})
export class NewListComponent implements OnInit {
	newListItems = [];
	symbol: string = '';
	listName: string = '';

  constructor(public snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  AddItem(data) {
  	console.log(data);

  	this.newListItems.push(data.toUpperCase());
  	this.symbol = ' ';
  }

  removeItem(id, name) {
  	//Checks if User wants to remove item from list
  	if(confirm("Are you sure delete: " + name)) {
  		//Removes the item
   		this.newListItems.splice(id, 1);
   		//Checks if the user closed the snackbar 
   		this.openSnackBar("Undo", "Test").afterDismissed().subscribe(info => {
  			if (info.dismissedByAction === true) {
  				//Currently Not working
    			this.newListItems.push(name);
  			}
		});
  	}
  }
  openSnackBar(action, value) {
  	let snackRef = this.snackBar.open(value, action, {
      duration: 2000,
    });
    return snackRef;
  }
  createWatchlist() {
  	
  }
}
