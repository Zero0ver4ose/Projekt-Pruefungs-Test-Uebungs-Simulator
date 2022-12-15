import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { MultipleChoiceFragenService } from '../shared/multiple-choice-fragen.service';
import { MultiChoiceFragen } from '../shared/multi-choice-fragen';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-einzel-multiple-choice-fragen',
  templateUrl: './einzel-multiple-choice-fragen.component.html',
  styleUrls: ['./einzel-multiple-choice-fragen.component.css']
})
export class EinzelMultipleChoiceFragenComponent implements OnInit  {
  switchAnswersFlag: boolean = false;
  answerID: number = -1
  countsID: number = 1
  router = this.route.url

  multichoicefragen:MultiChoiceFragen[];
  // @Output() showDetailsEvent = new EventEmitter<MultiChoiceFragen>()

  constructor (private mcf:MultipleChoiceFragenService,private route:Router){}

  ngOnInit(): void {
    this.multichoicefragen = this.mcf.getAll();
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

  nextquestion(counts: number){
    if(this.countsID == counts) {
      this.countsID += 1
    }
    if(this.countsID > 28) {

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
