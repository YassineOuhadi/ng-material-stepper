import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.css']
})
export class Step1Component implements OnInit {

  name: string;
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {

    this.form = this.formBuilder.group({
      name: ['', Validators.required]
    });
  }

  ngOnInit() {

    this.form.get('name').valueChanges
      .subscribe(val => {
        this.name = val;
      });
  }

}