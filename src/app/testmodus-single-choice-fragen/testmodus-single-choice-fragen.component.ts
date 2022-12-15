import { Component, OnInit } from '@angular/core';
import { SingleChoiceFragen } from '../shared/single-choice-fragen';
import { SingleChoiceFragenService } from '../shared/single-choice-fragen.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-testmodus-single-choice-fragen',
  templateUrl: './testmodus-single-choice-fragen.component.html',
  styleUrls: ['./testmodus-single-choice-fragen.component.css']
})

export class TestmodusSingleChoiceFragenComponent implements OnInit {

  constructor (
    private testscf:SingleChoiceFragenService,
    public dialog: MatDialog){}


  singleChoiceFragen:SingleChoiceFragen[];
  countsID: number = 1
  tries = 7
  answers = ""
  totalanswer = []
  saveCorrectAnswer: number = 0
  saveSkipQuestion: number = 0
  savefalseAnswer: number = 0

  ngOnInit(): void {
    this.singleChoiceFragen = this.testscf.getAll();
  }

  nextquestion(counts: number, correctanswer:string){
    if (correctanswer == this.answers[0]){
      if(this.countsID == counts) {
        this.countsID += 1
        this.answers = ""
        /**Hier Werden antworten gespeichert */
        this.saveCorrectAnswer += 1
        if(this.countsID > 70){
          this.countsID = 0
        }
        }
      } else
      {
      /**Erstelle ein PopUp button sobald ein Fehler aufgetritt */
      const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
        width: '300px', height: '100px',position: {
          top: '0vh',
          left: '40vw'}
      });
      dialogRef.afterClosed().subscribe(result => {
      });
      /* frage falsch beantwortet. User wird eine frage zurücksetzt.**/
      this.countsID -= 1
      this.tries -= 1
      this.saveCorrectAnswer -= 1
      this.savefalseAnswer += 1
      /** Sobald Frage = 0 ist wird man auf die Erste Frage geleitet */
      if(this.countsID == 0){
        this.countsID = 1
        this.answers = ""
      }
      /* 7 tries wenn > 7 dann wird testmodus abgebrochen und wird zu lernmodus hinwgewiesen*/
      if (this.tries == 0) {
        this.countsID = 71
      }
    }
  }
  /**Frage wird übersrpungen und bei jedem Skip wird es in eine Variable gespeichert für das Ergebnis am Ende */

  frageuebersrpingen(counts: number) {
    if(this.countsID == counts){
      this.countsID += 1
      this.saveSkipQuestion += 1
    }

    /** Hole den UserInput und speicher es in einer Variable */

  }
  oncheck(choosechoice:string){
    this.answers = choosechoice

  };


}
/** Das ist das erstellte Html PopUP-window-Html für das PopUp welches wir dann mit den Komponenten verbunden haben  */
@Component({
  selector: 'popup-window',
  templateUrl: 'popup-window.html',
  styleUrls: ['./testmodus-single-choice-fragen.component.css']
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<TestmodusSingleChoiceFragenComponent>){}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
