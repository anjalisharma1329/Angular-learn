import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

	// This is data binding examples
	title = "Register Page";
	// declared array of City.
	city =  ["Delhi", "Ghazibad", "pune"];
	//if and else condition
	isavailable = true; //variable is set to true (if it is true then condition show and if false then condition hide)
  
  	todaydate = new Date();

  	//Event Binding with show hide using if condition
  	firstclick(event){
  		this.isavailable = !this.isavailable;
  	}

  	changecity(event){
  		alert("City is changed");
  	}


  constructor() {}
  ngOnInit() { }

}
