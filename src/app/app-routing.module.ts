import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewTodoComponent } from './new-todo/new-todo.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  {
    path: '',
    component: TodoComponent,
  },
  {
    path: 'newToDo',
    component: NewTodoComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
