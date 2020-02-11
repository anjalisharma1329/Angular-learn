import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import form module
import {FormsModule,ReactiveFormsModule} from '@angular/forms' 

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
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule, MatCardModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatSelectModule,  MatCheckboxModule, MatRadioModule, MatTableModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
