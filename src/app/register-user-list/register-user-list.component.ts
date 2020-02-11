import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
	name: string;
	position: number;
	weight: number;
	symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
	{no: 1, name: 'anjali', emailid: 'anjalisharma3110@gmail.com', password: '123qwe', gender: 'female', phonenumber: '1234567890', city: 'Ghaziabad', },
];


@Component({
	selector: 'app-register-user-list',
	templateUrl: './register-user-list.component.html',
	styleUrls: ['./register-user-list.component.css']
})
export class RegisterUserListComponent implements OnInit {
	displayedColumns: string[] = ['no', 'name', 'emailid', 'password', 'gender', 'phonenumber', 'city'];
	dataSource = ELEMENT_DATA;

	constructor() { }

	ngOnInit() {
	}
}
