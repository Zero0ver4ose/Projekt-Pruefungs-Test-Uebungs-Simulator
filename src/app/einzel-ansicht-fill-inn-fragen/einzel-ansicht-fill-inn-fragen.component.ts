import { Component, OnInit } from '@angular/core';
import { FillInnFragenService } from '../shared/fill-inn-fragen.service';
import { FillInFragen } from '../shared/fill-in-fragen';
import { Router } from '@angular/router';

@Component({
  selector: 'app-einzel-ansicht-fill-inn-fragen',
  templateUrl: './einzel-ansicht-fill-inn-fragen.component.html',
  styleUrls: ['./einzel-ansicht-fill-inn-fragen.component.css']
})
export class EinzelAnsichtFillInnFragenComponent implements OnInit {
  fillinfragen:FillInFragen[]
  constructor(private fif:FillInnFragenService, private route:Router){}
  switchAnswersFlag: boolean = false;
  answerID: number = -1
  countsID: number = 1
  router = this.route.url
  value:number
  ngOnInit(): void {
    this.fillinfragen = this.fif.getAll();

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

  nextquestion(counts: number){
    if(this.countsID == counts) {
      this.countsID += 1
    }
    if(this.countsID > 21) {

      this.countsID = 0
    }
  };
  previousquestion(counts: number) {
    if(this.countsID == counts) {
      this.countsID -= 1
    }
    if(this.countsID == 0) {
      this.countsID = 1
    }
  };




}

