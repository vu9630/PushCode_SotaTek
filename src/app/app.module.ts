import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NewTodoComponent } from './new-todo/new-todo.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [AppComponent, TodoComponent, NewTodoComponent, NotFoundComponent],
  imports: [BrowserModule, ReactiveFormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
