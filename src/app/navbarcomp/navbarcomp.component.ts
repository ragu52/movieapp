import { Component,OnInit} from '@angular/core';
import {JsonpModule, Jsonp} from '@angular/http';
import { InfiniteScroll } from 'angular2-infinite-scroll';
import { Directive } from '@angular/core';
import {MovieService} from '../services/movie.service';
import { FavcompComponent } from '../favcomp/favcomp.component';

import {genre} from '../genre';
import {genres} from '../genrelist';
@Component({
  selector: 'app-navbarcomp',
  templateUrl: './navbarcomp.component.html',
  styleUrls: ['./navbarcomp.component.css']
})

export class NavbarcompComponent implements OnInit {

  constructor(private movieservice:MovieService,private favourites:FavcompComponent) { }

 searchString: string;
searchResults:Array<Object>;
totalpages:number;
page=1;
  search()
{
  
 this.movieservice.getmovies(this.searchString).subscribe(res => {this.searchResults = res.results;this.totalpages=res.total_pages});


}

genremethod(value){
    let array=[];
    genres.forEach(function(a){
      if(value.includes(a.id)){
        array.push(a.name);
      }
    
     
   });
    return array;
}

 onScroll(searchString) 
  { 

if(this.movieservice.page<=this.totalpages)
{
     this.movieservice.page++;
       console.log('scrolled!!');
        this.movieservice.getmovies(searchString)
       .subscribe( data=> {data.results.forEach((elem) => {
             this.searchResults.push(elem);
           })

   })
     
}}
 ngOnInit()
  {

  }
    

    onScrollDown (searchString,page)
     {
       
        console.log('scrolled down!!')
    }
        onScrollUp () {
      console.log('scrolled up!!')
    }


}
