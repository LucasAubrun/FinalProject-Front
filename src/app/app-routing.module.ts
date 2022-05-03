import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreationequipesComponent } from './creationequipes/creationequipes.component';
import { EquipesComponent } from './equipes/equipes.component';
import { ActivitesComponent } from './activites/activites.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { HomeComponent } from './home/home.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { EvenementsComponent } from './evenements/evenements.component';


const routes: Routes = [
{component: EquipesComponent, path: "equipes"},
{component: CreationequipesComponent, path: "creationequipes"},
{component: EvenementsComponent, path: "evenement"},
{component: ActivitesComponent, path: 'activites'},
{component: HomeComponent, path: 'home'},
{component: ConnexionComponent, path: 'connexion'},
{component: InscriptionComponent, path: 'inscription'}
//{component: PriveComponent, path: 'prive'},
//{component: PubliqueComponent, path: 'publique'}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }