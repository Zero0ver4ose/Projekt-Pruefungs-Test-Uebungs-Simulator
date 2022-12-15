import { NgModule  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { HauptseiteComponent } from './hauptseite/hauptseite.component';
import { LernmodusComponent } from './lernmodus/lernmodus.component';
import { TestmodusComponent } from './testmodus/testmodus.component';
import { MultiChoiceFragenListeComponent } from './multi-choice-fragen-liste/multi-choice-fragen-liste.component';
import { EinzelMultipleChoiceFragenComponent } from './einzel-multiple-choice-fragen/einzel-multiple-choice-fragen.component';
import { SingleChoiceFragenListeComponent } from './single-choice-fragen-liste/single-choice-fragen-liste.component';
import { EinzelSingleChoiceFragenComponent } from './einzel-single-choice-fragen/einzel-single-choice-fragen.component';
import { FillInnFragenComponent } from './fill-inn-fragen/fill-inn-fragen.component';
import { EinzelAnsichtFillInnFragenComponent } from './einzel-ansicht-fill-inn-fragen/einzel-ansicht-fill-inn-fragen.component';
import { TestMultipleChoiceFragenComponent } from './test-multiple-choice-fragen/test-multiple-choice-fragen.component';
// import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { TestmodusSingleChoiceFragenComponent } from './testmodus-single-choice-fragen/testmodus-single-choice-fragen.component';
import { MatDialogModule } from '@angular/material/dialog';
import { TestmodusFillInnComponent } from './testmodus-fill-inn/testmodus-fill-inn.component';
import { PruefungStartenComponent } from './pruefung-starten/pruefung-starten.component';
import { AlleFragetypenComponent } from './alle-fragetypen/alle-fragetypen.component';

@NgModule({
  declarations: [
    AppComponent,
    HauptseiteComponent,
    LernmodusComponent,
    TestmodusComponent,
    MultiChoiceFragenListeComponent,
    EinzelMultipleChoiceFragenComponent,
    SingleChoiceFragenListeComponent,
    EinzelSingleChoiceFragenComponent,
    FillInnFragenComponent,
    EinzelAnsichtFillInnFragenComponent,
    TestMultipleChoiceFragenComponent,
    TestmodusSingleChoiceFragenComponent,
    TestmodusFillInnComponent,
    PruefungStartenComponent,
    AlleFragetypenComponent,

  ],
  imports: [
    BrowserModule,
    // MatCheckboxModule,
    AppRoutingModule,
    FormsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
