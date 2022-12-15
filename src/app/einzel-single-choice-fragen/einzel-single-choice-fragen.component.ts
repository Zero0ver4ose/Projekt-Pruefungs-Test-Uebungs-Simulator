import { Component } from '@angular/core';
import { SingleChoiceFragenService } from '../shared/single-choice-fragen.service';
import { Router } from '@angular/router';
import { SingleChoiceFragen } from '../shared/single-choice-fragen';

@Component({
  selector: 'app-einzel-single-choice-fragen',
  templateUrl: './einzel-single-choice-fragen.component.html',
  styleUrls: ['./einzel-single-choice-fragen.component.css']
})
export class EinzelSingleChoiceFragenComponent {
  switchAnswersFlag: boolean = false;
  answerID: number = -1
  countsID: number = 1
  router = this.route.url

  singlechoicefragen:SingleChoiceFragen[];
  // @Output() showDetailsEvent = new EventEmitter<MultiChoiceFragen>()

  constructor (private scf:SingleChoiceFragenService,private route:Router){}

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

  nextquestion(counts: number){
    if(this.countsID == counts) {
      this.countsID += 1
    }
    if(this.countsID > 70) {

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
