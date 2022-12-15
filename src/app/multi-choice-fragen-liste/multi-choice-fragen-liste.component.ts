import { Component, OnInit } from '@angular/core';
import { MultiChoiceFragen } from '../shared/multi-choice-fragen';
import { Router } from '@angular/router';
import { MultipleChoiceFragenService } from '../shared/multiple-choice-fragen.service';


@Component({
  selector: 'app-multi-choice-fragen-liste',
  templateUrl: './multi-choice-fragen-liste.component.html',
  styleUrls: ['./multi-choice-fragen-liste.component.css']
})
export class MultiChoiceFragenListeComponent implements OnInit  {
  multichoicefragen: MultiChoiceFragen[];
  switchAnswersFlag: boolean = false;
  answerID: number = -1

  router = this.route.url

  constructor(private route:Router,private mcf:MultipleChoiceFragenService) {}

  ngOnInit(): void {
    this.multichoicefragen = this.mcf.getAll();

  }
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
