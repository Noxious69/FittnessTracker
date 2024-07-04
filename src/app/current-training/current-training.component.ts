import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import{MaterialModules} from "../material.module";
import {FlexModule} from "@angular/flex-layout";
import {MatDialog} from "@angular/material/dialog";
import {StopTrainingComponent} from "../stop-training/stop.component";

@Component({
  selector: 'app-current-training',
  standalone: true,
  imports: [MaterialModules, FlexModule],
  templateUrl: './current-training.component.html',
  styleUrl: './current-training.component.css'
})
export class CurrentTrainingComponent implements OnInit{
  progress=0
  timer:any;
@Output() DialogEmmiter = new EventEmitter();

  constructor(private dialog : MatDialog){}


  ngOnInit(): void {
    this.onTraining()
  }

  onTraining(){
    this.timer = setInterval(()=>{
      this.progress += 5;
      if(this.progress >= 100){
        clearInterval(this.timer);
      }
    },1000)
  }
  onStop(){
    clearInterval(this.timer)
   const dialogRef = this.dialog.open(StopTrainingComponent , {data:{
      progress:this.progress,
      }});
    dialogRef.afterClosed().subscribe(res=>{
      if (res){
        this.DialogEmmiter.emit();
      }else {
        this.onTraining()

      }
    })
  }

}
