import { Component, OnInit, Inject, ViewChildren, QueryList } from '@angular/core';
import { MultiChoiceFragen } from '../shared/multi-choice-fragen';
import { MultipleChoiceFragenService } from '../shared/multiple-choice-fragen.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-test-multiple-choice-fragen',
  templateUrl: './test-multiple-choice-fragen.component.html',
  styleUrls: ['./test-multiple-choice-fragen.component.css']
})

export class TestMultipleChoiceFragenComponent implements OnInit {

  constructor(
    private testmcf: MultipleChoiceFragenService,
    public dialog: MatDialog) {}

  
    multichoicefragen: MultiChoiceFragen[]
    countsID = 1
    tries = 7
    answers = []
    position: number
    totalanswer = []
    saveCorrectAnswer:number = 0
    saveSkipQuestion: number = 0
    savefalseAnswer: number = 0


  /**greift auf den service zu um die Fragen zu holen */
  ngOnInit(): void {
    this.multichoicefragen = this.testmcf.getAll();
  }

  /*Einzel-Ansicht*/
  /*weiter button (loggt die anwtorten ein)*/
  /**Antwort auswahl mit dem richtigen Anzahl an Antworten verglichen wenn richtig dann eine frage weiter wenn falsch versuch -1 und frage zurück */
  nextquestion(counts: number, correctanswers: string[]){
  let numberofcorrectanswers : number = 0
  for (let i of this.answers)
    {
      if (correctanswers.indexOf(i.substring(0,1)) >= 0)
      {
        numberofcorrectanswers += 1
      }
    }
          /**Checkt nach Anzahl der ausgwählten und Anzahl der richtigen Antworten*/
         if (numberofcorrectanswers == correctanswers.length)
            {
                if(this.countsID == counts) {
                this.countsID += 1
                /**Hier Werden antworten gespeichert */
                this.saveCorrectAnswer += 1
                this.answers = []
                if(this.countsID > 28){
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

              } else {
                this.answers = []
              }
              /* 7 tries wenn > 7 dann wird testmodus abgebrochen und wird zu lernmodus hinwgewiesen*/
              if (this.tries == 0) {
                this.countsID = 29
              }
            }
    };


  /**Array vorbereitet und gecheckt ob Antwort bereits vorhanden wenn ja mach den .splice(entfernen) wenn nicht .push(in array hinzufügen) */
  oncheck(answer: string) {
    this.position = this.answers.indexOf(answer)
    if(this.position == -1){
      this.answers.push(answer)
    console.log(this.position)
    console.log(this.answers)
      }
    else {
      this.answers.splice(this.position, 1)
      console.log(this.answers)
    }
  };

  /*überspring button*/
  frageuebersrpingen(counts: number) {
    if(this.countsID == counts){
      this.countsID += 1
      this.saveSkipQuestion += 1
    }
  };
}

/** Eine Neue HTML Template (Popup-window.html) wurde zu diese Komponente eingebunden */
@Component({
  selector: 'popup-window',
  templateUrl: 'popup-window.html',
  styleUrls: ['./test-multiple-choice-fragen.component.css']
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<TestMultipleChoiceFragenComponent>){}

  onNoClick(): void {
    this.dialogRef.close();
  }

}


