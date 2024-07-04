import {Component, Output} from '@angular/core';
import {MaterialModules} from "../material.module";
import {FlexModule} from "@angular/flex-layout";
import {EventEmitter } from "@angular/core";

@Component({
  selector: 'app-new-training',
  standalone: true,
  imports: [MaterialModules, FlexModule],
  templateUrl: './new-training.component.html',
  styleUrl: './new-training.component.css'
})
export class NewTrainingComponent {

  @Output() TrainigStart = new EventEmitter<void>();

  onStartTraining() {
    this.TrainigStart.emit();
  }
}
