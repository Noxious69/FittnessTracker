import {Component, ChangeDetectionStrategy, signal, viewChild, OnInit, OnDestroy} from '@angular/core';
import {MatFormField} from "@angular/material/form-field";
import { FlexLayoutModule } from '@angular/flex-layout';
import {MaterialModules} from '../../material.module'
import {merge} from 'rxjs';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators} from "@angular/forms";
import {AuthServiceTsService} from "../auth.service.ts.service";



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MaterialModules,
    MatFormField,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers:[AuthServiceTsService],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit , OnDestroy{
  // signupForm = new FormGroup({
  //   Email : new FormControl<any>(null , [Validators.required , Validators.email ]),
  //   Password  : new FormControl<any>(null, [Validators.required , Validators.minLength(8) , Validators.maxLength(15)]),
  // })

  constructor(private auth: AuthServiceTsService) {
    // merge(this.signupForm.Email.statusChanges, this.signupForm.email.valueChanges)
    //   .pipe(takeUntilDestroyed())
    //   .subscribe(() => this.updateErrorMessage());
  }

  protected readonly value = signal('');
  protected readonly require = require;
  protected onInput(event: Event) {
    this.value.set((event.target as HTMLInputElement).value);
  }

  onSubmit(form : NgForm){
    this.auth.login({
      email : form.value.email,
      password: form.value.password
    })
  }

  ngOnInit(){}
  ngOnDestroy(){}

}
