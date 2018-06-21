import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.css']
})
export class NewListComponent implements OnInit {
	newListItems = [];
	symbol: string = '';

  constructor() { }

  ngOnInit() {
  }

  AddItem(data) {
  	console.log(data);

  	this.newListItems.push(data);
  	this.symbol = ' ';
  }

  removeItem(id) {
  	console.log(id);

   		this.newListItems.splice(id, 1);
	console.log(this.newListItems);
  }
}
