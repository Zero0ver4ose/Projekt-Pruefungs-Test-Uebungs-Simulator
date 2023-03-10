import { Component, OnInit, Output } from '@angular/core';
import { MultipleChoiceFragenService } from '../shared/multiple-choice-fragen.service';
import { MultiChoiceFragen } from '../shared/multi-choice-fragen';
import { SingleChoiceFragen } from '../shared/single-choice-fragen';
import { SingleChoiceFragenService } from '../shared/single-choice-fragen.service';
import { FillInFragen } from '../shared/fill-in-fragen';
import { FillInnFragenService } from '../shared/fill-inn-fragen.service';
@Component({
  selector: 'app-pruefung-starten',
  templateUrl: './pruefung-starten.component.html',
  styleUrls: ['./pruefung-starten.component.css']
})
export class PruefungStartenComponent implements OnInit {

  /** Alle Fragentypen in einem neuen Array untergebracht und Neue Item/ID vergeben */
  multi: MultiChoiceFragen[];
  single: SingleChoiceFragen[];
  fillin: FillInFragen[];
  mixedquestion: any[] = []
  mixquestion: any[] = []
  newIDArray: any[] = []

  /**Mischt den neuen Array */
  shuffledArray: any[] = []

  /**Zeigt den Index an */
  currendQuestion: any
  questionIndex: number

  /**Setzt das Html Component auf False. Beim 'Prüfung Starten' wird es auf true gesetzt und die Fragen werden angezeigt */
  schiese: boolean = false

  /** Disabled den 'Prüfung Starten' Button */
  clicked = false
  
  /**Speicherung der User Antworten auf die Fragetypen */
  position: number
  userInput = ""
  multianswers = []
  singleanswers:string = ""

  /**Anzahl der Richtigen Fragen, Anzahl der nicht beantworteten und Anzahl der geratenen Fragen */
  saveCorrectAnswer: number = 0
  saveGuessAnswer: number = 0
  saveSkipQuestion: number = 0
  saveAllQuestions:number[] = []

  /**Fragen mehr als 20% von 120 Falsch beantwortet */
  toomanywrongquestions: boolean = true

  constructor(
    public mcf: MultipleChoiceFragenService,
    public scf: SingleChoiceFragenService,
    public fillinf: FillInnFragenService,
  ) { }

  ngOnInit(): void {
    this.multi = this.mcf.getAll();
    this.single = this.scf.getAll();
    this.fillin = this.fillinf.getAll();

    this.mixquestion = this.mixedquestion.concat(this.multi, this.single, this.fillin)
    this.newIDArray = this.mixquestion.map((item, index) => ({ ...item, id: 1 }))

    this.questionIndex = 1
    this.currendQuestion = this.newIDArray[this.questionIndex]
   

  }
  /** Mischt den neuen Array welches mit der Neuen ID und Fragetypen gefühlt ist */
  shufflequestion() 
  {
   
    this.shuffledArray = this.newIDArray.sort((a, b) => 0.5 - Math.random())
    this.questionIndex = 1
    this.currendQuestion = this.newIDArray[this.questionIndex]
    // console.log(this.currendQuestion)
  }

  /**Geht zur nächsten Frage. */
  /**Prüft ob die UserEingabe mit dem Antworten übereinstimmt */
  /**Prüft ob die 20% von 120 Fragen überschritten ist */
  nextquestion(id: number) 
  {
    console.log(this.currendQuestion)

    // console.log(this.userInput,this.multianswers,this.singleanswers)
    if (id < this.shuffledArray.length - 1) 
    {
      this.questionIndex++
      if(this.currendQuestion.qtyp == "scf") 
      {
        if (this.currendQuestion.answers1 == this.singleanswers.slice(0,1))
        {
          this.saveCorrectAnswer++
          this.saveAllQuestions.push(this.saveCorrectAnswer)
        } else if (this.singleanswers == "")
        {
          this.saveSkipQuestion++
          this.saveAllQuestions.push(this.saveSkipQuestion)

        }
         else if (this.currendQuestion.answers1 != this.singleanswers.slice(0,1))
         {
          this.saveGuessAnswer++
          this.saveAllQuestions.push(this.saveGuessAnswer)

         }
      }
      else if (this.currendQuestion.qtyp == "fillin"){
        if(this.currendQuestion.answer == this.userInput)
        {
          this.saveCorrectAnswer++
          this.saveAllQuestions.push(this.saveCorrectAnswer)

        }
        else if(this.userInput == "")
        {
          this.saveSkipQuestion++
          this.saveAllQuestions.push(this.saveSkipQuestion)

        } else if(this.currendQuestion.answer != this.userInput)
        {
          this.saveGuessAnswer++
          this.saveAllQuestions.push(this.saveGuessAnswer)

        }
        
      }
      else if (this.currendQuestion.qtyp == "mcf")
      {

        if (this.multianswers.length == 0) 
        {
          this.saveSkipQuestion++
          this.saveAllQuestions.push(this.saveSkipQuestion)

        } 
        else 
        {
              let numberofcorrectanswers = 0

            for (let i of this.multianswers)
            {
              if (this.currendQuestion.answers.indexOf(i.slice(0,1)) > -1)
              {
                numberofcorrectanswers += 1
              }
            }
              if(this.currendQuestion.answers.length != this.multianswers.length)
              {
                this.saveGuessAnswer++
                this.saveAllQuestions.push(this.saveGuessAnswer)

              }
              else 
              {
                    if (numberofcorrectanswers == this.currendQuestion.answers.length)
                    {
                      this.saveCorrectAnswer++
                      this.saveAllQuestions.push(this.saveCorrectAnswer)


                    } else {
                      this.saveGuessAnswer++
                      this.saveAllQuestions.push(this.saveGuessAnswer)

                    }
                }
            
        }
      }
      if((this.saveGuessAnswer/120) > 0.2)
      {
        this.toomanywrongquestions = false
      }
      console.log(this.saveCorrectAnswer,"A",this.saveGuessAnswer,"B",this.saveSkipQuestion)
      // this.userInput = ""
      // this.multianswers = []
      // this.singleanswers = ""
      this.currendQuestion = this.newIDArray[this.questionIndex]
      console.log(this.saveAllQuestions)
     

    }
  if(this.questionIndex >= 118){
    if((this.saveGuessAnswer/120) < 0.2)
    {
      this.questionIndex = 119

    } else
    {
    this.toomanywrongquestions = false
    }

    

  }
  }

  /**Geht eine Frage zurück um die Frage nochmal zu beantworten */
  prevquestion(id: number) 
  {
    if (id > 0) {
      this.questionIndex--
      this.currendQuestion = this.newIDArray[this.questionIndex]
      this.userInput 
      this.multianswers 
      this.singleanswers 
      this.saveAllQuestions.pop()
      console.log(this.singleanswers,this.multianswers,this.userInput  )
    }
    
  }

  /**Array vorbereitet und gecheckt ob Antwort bereits vorhanden wenn ja mach den .splice(entfernen) wenn nicht .push(in array hinzufügen) */
  oncheckmulti(answer: string) 
  {
    this.position = this.multianswers.indexOf(answer)
    if (this.position == -1) {
      this.multianswers.push(answer)
      
    }
    else {
      this.multianswers.splice(this.position, 1)
      
    }
  };

  /**Vergleicht die UserAuswahl mit dem Antwort string */
  onchecksingle(choosechoice:string)
  {
    this.singleanswers = choosechoice
    console.log(this.singleanswers)
    
  };

  /**Vergleicht den UserINPUT mit dem Antwort string */
  getValue(UserInput: string) 
  {
    this.userInput = UserInput

  };

}
