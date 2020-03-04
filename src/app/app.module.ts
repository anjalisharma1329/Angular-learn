import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { MyserviceService } from './myservice.service';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import form module
import {FormsModule} from '@angular/forms' 

// import material component
import { MatDatepickerModule, MatCardModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatCheckboxModule,  MatRadioModule} from '@angular/material';

// import table module
import {  MatTableModule } from '@angular/material/table';


// component page name
import { RegisterComponent } from './register/register.component';
import { RegisterUserListComponent } from './register-user-list/register-user-list.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    RegisterUserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
    BrowserAnimationsModule,
    FormsModule,
    MatDatepickerModule, MatCardModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatSelectModule,  MatCheckboxModule, MatRadioModule, MatTableModule,
  
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
