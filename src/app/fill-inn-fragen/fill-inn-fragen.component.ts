import { Component, OnInit } from '@angular/core';
import { FillInnFragenService } from '../shared/fill-inn-fragen.service';
import { FillInFragen } from '../shared/fill-in-fragen';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fill-inn-fragen',
  templateUrl: './fill-inn-fragen.component.html',
  styleUrls: ['./fill-inn-fragen.component.css']
})
export class FillInnFragenComponent implements OnInit {
  fillinfragen: FillInFragen[];
  switchAnswersFlag: boolean = false;
  answerID: number = -1

  router = this.route.url

  constructor(private route:Router,private fif:FillInnFragenService) {}

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
}




