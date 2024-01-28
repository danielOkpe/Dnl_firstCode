import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { TasksModule } from './tasks/tasks.module';
import { UsersModule } from './users/users.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ButtonSizeDirective } from './users/button-size.directive';

@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    PageNotFoundComponent,
    
  ],
  imports: [
    BrowserModule,
    TasksModule,
    UsersModule,
    AppRoutingModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
