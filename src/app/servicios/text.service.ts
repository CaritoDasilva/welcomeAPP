import { Injectable } from '@angular/core';
import { Text } from '../componentes/interfaces/text.interface';
import { Http } from '@angular/http';



@Injectable({
  providedIn: 'root'
})
export class TextService {

  postURL: string = "https://welcomeapp22.firebaseio.com/post.json"


  constructor(private http: Http) { }

  nuevoPost(text: Text) {

    let body = JSON.stringify(text);


    return this.http.post(this.postURL, body)

      .map(res => {
        console.log(res.json());
        return res.json();
      }

      )
  }
}
