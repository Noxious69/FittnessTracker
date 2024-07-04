import { Component } from '@angular/core';
import {MaterialModules} from "../material.module";
import {NewTrainingComponent} from "../new-training/new-training.component";
import {PastTrainingComponent} from "../past-training/past-training.component";
import {FlexModule} from "@angular/flex-layout";
import {CurrentTrainingComponent} from "../current-training/current-training.component";

@Component({
  selector: 'app-training',
  standalone: true,
  imports: [
    MaterialModules,
    NewTrainingComponent,
    PastTrainingComponent,
    FlexModule,
    CurrentTrainingComponent,

  ],
  templateUrl: './training.component.html',
  styleUrl: './training.component.css'
})
export class TrainingComponent {
  onGoingTraining:boolean = false;
}
