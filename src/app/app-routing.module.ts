import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
import { TestmodusSingleChoiceFragenComponent } from './testmodus-single-choice-fragen/testmodus-single-choice-fragen.component';
import { TestmodusFillInnComponent } from './testmodus-fill-inn/testmodus-fill-inn.component';
import { PruefungStartenComponent } from './pruefung-starten/pruefung-starten.component';
import { AlleFragetypenComponent } from './alle-fragetypen/alle-fragetypen.component';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HauptseiteComponent },
  { path: 'testmodus', component: TestmodusComponent },
  { path: 'lernmodus', component: LernmodusComponent },
  { path: 'multi-choice-fragen', component: MultiChoiceFragenListeComponent},
  { path: 'single-choice-listen-ansicht', component: SingleChoiceFragenListeComponent},
  { path: 'einzel-multiple-choice-ansicht', component: EinzelMultipleChoiceFragenComponent},
  { path: 'einzel-single-choice-ansicht', component: EinzelSingleChoiceFragenComponent},
  { path: 'fill-inn-listen-Ansicht', component: FillInnFragenComponent},
  { path: 'einzel-fill-inn-ansicht', component: EinzelAnsichtFillInnFragenComponent},
  { path: 'test-multiple-choice-fragen', component: TestMultipleChoiceFragenComponent},
  { path: 'testtmodus-single-choice-fragen', component: TestmodusSingleChoiceFragenComponent},
  { path: 'testmodus-fill-inn', component: TestmodusFillInnComponent},
  { path: 'pruefmodus-starten', component: PruefungStartenComponent},
  { path: 'alle-frage-typen', component: AlleFragetypenComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
