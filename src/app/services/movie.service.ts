import { Injectable } from '@angular/core';

import {Jsonp} from '@angular/http';
import { Http , Response,RequestOptions,Headers} from '@angular/http';


import 'rxjs/Rx';




@Injectable()
export class MovieService {


page=1;
 constructor(private jsonp: Jsonp,private http:Http) {  }


   getmovies(search:string)
    {//total_pages": 5406;


     let url = `https://api.themoviedb.org/3/search/movie?api_key=aa930b094ff3e1db1914859658449112&language=en-US&page=`+this.page+`&include_adult=false&query=${encodeURIComponent(search)}&callback=JSONP_CALLBACK`;
    
      return this.jsonp.get(url).map(res => res.json() );
    
   }
// getgenre(search:string)
// {

//  let url =`https://api.themoviedb.org/3/genre/movie/list?api_key=aa930b094ff3e1db1914859658449112&language=en-US`;
//  return this.jsonp.get(url).map(res => res.json() );
// }
  getfav(data)
{
 console.log("In service");
        let url = "http://localhost:3000/api/bear";
        let encoded_data = data ;
        console.log("Stringified");
        let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
        let options = new RequestOptions({ headers: headers });

       return this.http.post(url,encoded_data).map(()=>console.log('sucessfully added'));
}
printfav()
{
console.log("In service printfav");
        let url = "http://localhost:3000/api/bear";
       // let encoded_data = data ;
        console.log("Stringified");

       return this.http.get(url).map((response:Response) => response.json());



}

updateFavourites(data)
    {
         let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
        let options = new RequestOptions({ headers: headers });
        let body=JSON.stringify(data);
        let url = "http://localhost:3000/api/bear";
        return this.http.put(`${url}/${data.id}`,data,headers).map(res=>res.json());
   }

deleteFavourite(id:number)
{
	let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
        let options = new RequestOptions({ headers: headers });
        let url = "http://localhost:3000/api/bear/"+id;
        return this.http.delete(url).map(res=>res.json());
}

}