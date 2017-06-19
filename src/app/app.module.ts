import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WebdevComponent } from './webdev/webdev.component';
import { PhotoshopComponent } from './photoshop/photoshop.component';
import { IllustratorComponent } from './illustrator/illustrator.component';
import { ProgrammingComponent } from './programming/programming.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WebdevComponent,
    PhotoshopComponent,
    IllustratorComponent,
    ProgrammingComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([ 
    {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    },
    {
      path: 'home',
      component: HomeComponent
    },
    {
      path: 'webdev',
      component: WebdevComponent
    },
    {
      path: 'photoshop',
      component: PhotoshopComponent
    },
    {
      path: 'illustrator',
      component: IllustratorComponent
    },
    {
      path: 'programming',
      component: ProgrammingComponent
    },
    {
      path: 'contact',
      component: ContactComponent
    }
    
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
