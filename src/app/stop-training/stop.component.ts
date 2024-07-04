import {Component, Inject} from "@angular/core";
import {MaterialModules} from "../material.module";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {CurrentTrainingComponent} from "../current-training/current-training.component";
import {PastTrainingComponent} from "../past-training/past-training.component";

@Component({
  selector: 'app-stop',
  standalone: true,
  imports :[MaterialModules],
  templateUrl: './stop.component.html'
})
export class StopTrainingComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public passedData: any) {
  }
}
