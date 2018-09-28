import { Component, OnInit, Input, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';

import { Text } from '../interfaces/text.interface';
import { TextService } from '../../servicios/text.service';


// import { postText } from 'selenium-webdriver/http';
import { EventEmitter } from 'events';



@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss']
})

export class HomePageComponent implements OnInit {
    text: Object = {
        contenido: ""
    }

    constructor(public _textService: TextService) { }


    ngOnInit() {
    }
    createPost(text: NgForm) {
        // console.log(this.text.value);

        this._textService.nuevoPost(this.text)
            .subscribe(data => {

            })

    }


}
