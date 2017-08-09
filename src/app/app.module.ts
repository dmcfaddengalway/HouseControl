import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { routes } from './app.routes';

import { HeaderBarComponent } from './Shared/header-bar/header-bar.component';
import { FooterBarComponent } from './Shared/footer-bar/footer-bar.component';
import { ToDoComponent } from './Components/to-do/to-do.component';
import { GroceryListComponent } from './Components/grocery-list/grocery-list.component';
import { CleaningComponent } from './Components/cleaning/cleaning.component';
import { IssuesComponent } from './Components/issues/issues.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderBarComponent,
    FooterBarComponent,
    ToDoComponent,
    GroceryListComponent,
    CleaningComponent,
    IssuesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
