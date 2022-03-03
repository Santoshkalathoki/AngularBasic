import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {

  templateForm!: NgForm;
  data: string = 'Santosh Kalathoki'; //input type ma name aauxa
  constructor() { }

  ngOnInit(): void {
  }

  onChange(event: any): void {
    console.log('event: ', event.value);
  }

  submit(form:any){
    console.log('form details: ', form);
  }

}
