import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, AbstractControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-reactive-regist',
  templateUrl: './reactive-regist.component.html',
  styleUrls: ['./reactive-regist.component.css']
})
export class ReactiveRegistComponent implements OnInit {

  xxxxx(control:AbstractControl):{[key:string]: any}{
    return null;
  }

  formModule: FormGroup;

  constructor(fb: FormBuilder) {
    this.formModule = fb.group({
      username: ['',[Validators.required,Validators.minLength(6 )]],
      mobile: [''],
      passwordsGroup: fb.group({
        password: [''],
        pconfirm: ['']
      })
    })
  }
  onSubmit(){
    console.log(this.formModule.value);
  }

  ngOnInit() {
  }

}
