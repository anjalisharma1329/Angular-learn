import { Component } from '@angular/core';
import { MyserviceService } from './myservice.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'learn-angular';
  public persondata = [];



  constructor(private myservice: MyserviceService) {}

  ngOnInit() {  


    // To get the data in the project

    this.myservice.getData().subscribe((data) => {
      this.persondata = Array.from(Object.keys(data), k=>data[k]);
      console.log(this.persondata);
    });

 }
}
