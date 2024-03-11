import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanificacionPageComponent } from './pages/planificacion/page/planificacion-page/planificacion-page.component';
import { RecetasPageComponent } from './pages/recetas/page/recetas-page/recetas-page.component';
import { SurveyPageComponent } from './pages/survey/page/survey-page/survey-page.component';

const routes: Routes = [
  { path: 'recetas', component: RecetasPageComponent},
  { path: 'planificacion', component: PlanificacionPageComponent},
  { path: 'encuesta', component: SurveyPageComponent},
  { path: '**', redirectTo: '/recetas', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
