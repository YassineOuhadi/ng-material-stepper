import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.css']
})
export class Step2Component implements OnInit {

  form: FormGroup;
  
  constructor(private formBuilder: FormBuilder) {

     this.form = this.formBuilder.group({
      name: ['', Validators.required]
    });
   }

  ngOnInit() {
  }

}