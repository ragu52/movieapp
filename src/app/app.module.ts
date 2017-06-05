import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {JsonpModule, Jsonp} from '@angular/http';
import { AppComponent } from './app.component';
import {Ng2PaginationModule} from 'ng2-pagination';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';
import {MovieService} from './services/movie.service';
import { FavcompComponent } from './favcomp/favcomp.component';
import { provideRoutes} from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import { NavbarcompComponent } from './navbarcomp/navbarcomp.component';
 const appRoutes: Routes = [
  {path:'',component: NavbarcompComponent},
   {path:'Home',component: NavbarcompComponent},
  
  { path: 'favourite', component: FavcompComponent }


];
@NgModule({

 
  declarations: [
    AppComponent,
    FavcompComponent,
    NavbarcompComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    InfiniteScrollModule,
    Ng2PaginationModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [MovieService,FavcompComponent],
  bootstrap: [AppComponent]
})
export class AppModule {


 }
