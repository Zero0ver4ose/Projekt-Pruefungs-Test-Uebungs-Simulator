import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SingleChoiceFragenService } from '../shared/single-choice-fragen.service';
import { SingleChoiceFragen } from '../shared/single-choice-fragen';
@Component({
  selector: 'app-single-choice-fragen-liste',
  templateUrl: './single-choice-fragen-liste.component.html',
  styleUrls: ['./single-choice-fragen-liste.component.css']
})
export class SingleChoiceFragenListeComponent implements OnInit{
  constructor(private route:Router, private scf:SingleChoiceFragenService) {}
  singlechoicefragen: SingleChoiceFragen[];
  switchAnswersFlag: boolean = false;
  answerID: number = -1
  router = this.route.url;

  ngOnInit(): void {
    this.singlechoicefragen = this.scf.getAll();
  };

  switchAnswers(id: number) {
    if(this.answerID == -1) {
      this.switchAnswersFlag = !this.switchAnswersFlag
    }
    if(this.answerID == id) {
      this.switchAnswersFlag = !this.switchAnswersFlag
    } else {
      this.answerID = id
    }
  };

  
}
