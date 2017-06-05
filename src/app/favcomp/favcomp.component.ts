import { Component, OnInit } from '@angular/core';
import {MovieService} from '../services/movie.service';
import { Http , Response,RequestOptions,Headers} from '@angular/http';
import {Jsonp} from '@angular/http';

@Component({
  selector: 'app-favcomp',
  templateUrl: './favcomp.component.html',
  styleUrls: ['./favcomp.component.css']
})
export class FavcompComponent implements OnInit {

  constructor(private movieservice:MovieService,private http:Http,private jsonp:Jsonp) { 
  	this.movieservice.printfav().subscribe(res=>{this.favarr=res})}

  ngOnInit() {
  }
  searchString: string;
searchResults:Array<Object>;
totalpages:number;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
page=1;
genarr=[];
genarr1=[];
favarr=[];
addfav(title,rating,id,poster)
 {
   let obj={id,title,rating,poster};
   console.log(title+""+rating+""+id+""+poster);
   this.movieservice.getfav(obj).subscribe(
(data)=>console.log("added")
);


}

// printthefav(){
//   // return this.http.get("http://localhost:3000/api/bear")
//   //       .map((res:Response) => res.json())
//   //       .do(data => console.log('data: ' + JSON.stringify(data)))
//   //       .subscribe(
//   //           data => { this.favarr=data},
//   //           err => console.error(err),
//   //           () => console.log("favarrayyy"+this.favarr)
//   //       );



// }
delete=[];
removefav(id){
 this.movieservice.deleteFavourite(id).subscribe(data=>(this.favarr=data));

}
getResults=[];
updateRating(id,title,rating,poster)
{
  let obj={id,title,rating,poster};
  this.movieservice.updateFavourites(obj).subscribe(data => {this.favarr=data});
console.log(this.favarr);

}

}
