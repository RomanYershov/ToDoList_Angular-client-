import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todolist/components/todo/todo.component';
import { RegistrationComponent } from './todolist/components/registration/registration.component';
import { LoginComponent } from './todolist/components/login/login.component';
import { LoginService } from './todolist/services/login.service';
import {FormsModule} from '@angular/forms';
import { TodolistService } from './todolist/services/todolist.service';
import { Routes, RouterModule } from '@angular/router';
import { SearchPipe } from './todolist/pipes/search.pipe';
import { SortDonePipe } from './todolist/pipes/sort-done.pepi';

const appRoutes:Routes = [
  {path: '',component: LoginComponent},
  {path: 'todo', component: TodoComponent},
  {path: 'registration', component:RegistrationComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    RegistrationComponent,
    LoginComponent,
    SearchPipe,
    SortDonePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [TodolistService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
