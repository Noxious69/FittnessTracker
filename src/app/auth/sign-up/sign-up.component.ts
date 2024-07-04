import {Component, ChangeDetectionStrategy, signal, viewChild, OnDestroy, OnInit} from '@angular/core';
import {MatFormField} from "@angular/material/form-field";
import { FlexLayoutModule } from '@angular/flex-layout';
import {MaterialModules} from '../../material.module'
import {merge} from 'rxjs';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators} from "@angular/forms";
import {AuthModel} from "../auth-model";
import {AuthServiceTsService} from "../auth.service.ts.service";

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FlexLayoutModule, MatFormField, FormsModule, MaterialModules ],
  providers:[AuthServiceTsService],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent implements OnInit , OnDestroy {

  protected readonly value = signal('');
  protected readonly require = require;

  protected onInput(event: Event) {
    this.value.set((event.target as HTMLInputElement).value);
  }

  constructor( private auth : AuthServiceTsService ) {}


  onSubmit(form: NgForm){
    this.auth.registerUser({
        email : form.value.email,
        password: form.value.password
      }
    )
  }

  ngOnInit(){

  }

  ngOnDestroy(){


  }
}
