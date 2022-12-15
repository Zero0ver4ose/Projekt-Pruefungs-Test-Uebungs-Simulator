import { Component, OnInit } from '@angular/core';
import { MultipleChoiceFragenService } from '../shared/multiple-choice-fragen.service';
import { MultiChoiceFragen } from '../shared/multi-choice-fragen';
import { SingleChoiceFragen } from '../shared/single-choice-fragen';
import { SingleChoiceFragenService } from '../shared/single-choice-fragen.service';
import { FillInFragen } from '../shared/fill-in-fragen';
import { FillInnFragenService } from '../shared/fill-inn-fragen.service';
@Component({
  selector: 'app-alle-fragetypen',
  templateUrl: './alle-fragetypen.component.html',
  styleUrls: ['./alle-fragetypen.component.css']
})
export class AlleFragetypenComponent implements OnInit  {
  multi : MultiChoiceFragen[];
  single : SingleChoiceFragen[];
  fillin : FillInFragen[];
  mixedquestion:any[] = []
  mixquestion:any[] = []
  switchAnswersFlag: boolean = false;
  answerID: number = -1

  constructor(
    public mcf:MultipleChoiceFragenService,
    public scf:SingleChoiceFragenService,
    public fillinf:FillInnFragenService,
    ){}
    
  ngOnInit(): void {
    this.multi = this.mcf.getAll();
    this.single = this.scf.getAll();
    this.fillin = this.fillinf.getAll();
    this.mixquestion = this.mixedquestion.concat(this.multi, this.single, this.fillin)
    console.log(this.mixquestion)

    
  }
  switch(id: number) {
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
