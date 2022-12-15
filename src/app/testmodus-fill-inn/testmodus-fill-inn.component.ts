import { Component, OnInit } from '@angular/core';
import { FillInnFragenService } from '../shared/fill-inn-fragen.service';
import { FillInFragen } from '../shared/fill-in-fragen';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-testmodus-fill-inn',
  templateUrl: './testmodus-fill-inn.component.html',
  styleUrls: ['./testmodus-fill-inn.component.css']
})
export class TestmodusFillInnComponent implements OnInit {

  constructor( private testmodusfillinn: FillInnFragenService,
               public dialog: MatDialog){}
  fillInFragen:FillInFragen[]
  tries = 7
  countsID = 1
  fillInanswer = ""
  userInput = ""
  saveCorrectAnswer: number = 0
  saveSkipQuestion: number = 0
  savefalseAnswer: number = 0
  ngOnInit(): void {
    this.fillInFragen = this.testmodusfillinn.getAll()

  }
 /**Bei der Aktion nextquestion soll der eingegebene Input Wert mit dem Default Antwort der Fill-Inn-Fragen verglichen werden
  * Bei richtige Antwort, wird die Anzahl der korrekten Antwort gespeichert und zur nächsten Frage weitergeleitet.
  * Bei Falsche Antwort, erscheint ein PopUp Fenster mit einem Warn Hinweis und der User wird eine Frage zurück gesetzt.*/
  nextquestion( fillInAnswer: string){
    this.fillInanswer = fillInAnswer
    if(this.fillInanswer == this.userInput) {
      this.countsID += 1
      this.saveCorrectAnswer += 1
      this.fillInanswer = ""
      
    if (this.countsID > 21) {
      this.countsID = 23
    }
  } else {
     /**Erstelle ein PopUp button sobald ein Fehler aufgetritt */
      const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
        width: '300px', height: '100px',position: {
          top: '0vh',
          left: '40vw'}});
      dialogRef.afterClosed().subscribe(result => { });
    this.tries -= 1
    this.countsID -= 1
    this.saveCorrectAnswer -= 1
    this.savefalseAnswer += 1
  } if(this.countsID == 0){
          this.countsID = 1
          this.fillInanswer = ""
        }  
  if (this.tries == 0) {
    this.countsID = 22
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
  getValue(UserInput:string){
    this.userInput = UserInput
    console.log(this.userInput)

  };

}

/** Das ist das erstellte Html PopUP-window-Html für das PopUp welches wir dann mit den Komponenten verbunden haben  */
@Component({
  selector: 'popup-window',
  templateUrl: 'popup-window.html',
  styleUrls: ['./testmodus-fill-inn.component.css']
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<TestmodusFillInnComponent>){}

  onNoClick(): void {
    this.dialogRef.close();
  }

}


