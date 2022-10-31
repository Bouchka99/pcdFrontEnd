import { TherapieHomeComponent } from './therapie-home/therapie-home.component';
import { ModifierPasswordComponent } from './modifier-password/modifier-password.component';
import { ConsulterhistoriqueComponent } from './consulterhistorique/consulterhistorique.component';
import { ModifierRendezVousComponent } from './modifier-rendez-vous/modifier-rendez-vous.component';
import { ListepatientComponent } from './listepatient/listepatient.component';
import { MedecinPrincipalComponent } from './medecin-principal/medecin-principal.component';


import { MedecinPrincipalGuard } from './medecin-principal.guard';
//
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//
import { ListeSecretaireComponent } from './liste-secretaire/liste-secretaire.component';
import { Navbar0Component } from './navbar0/navbar0.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfilComponent } from './profil/profil.component';
import { AjouterMedecinComponent } from './ajouter-medecin/ajouter-medecin.component';
import { AjouterSecretaireComponent } from './ajouter-secretaire/ajouter-secretaire.component';
import { AjouterTherapieComponent } from './ajouter-therapie/ajouter-therapie.component';
import { ListeMedecinComponent } from './liste-medecin/liste-medecin.component';
import { ListeTherapieComponent } from './liste-therapie/liste-therapie.component';
import { ModifierMedecinComponent } from './modifier-medecin/modifier-medecin.component';
import { ModifierSecretaireComponent } from './modifier-secretaire/modifier-secretaire.component';
import { ModifierTherapieComponent } from './modifier-therapie/modifier-therapie.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarPatientComponent } from './navbar-patient/navbar-patient.component';
import { NavbarSecretaireComponent } from './navbar-secretaire/navbar-secretaire.component';
import { RegistrationPatientComponent } from './registration-patient/registration-patient.component';
import { RendezvousComponent } from './rendezvous/rendezvous.component';
import { ProfilMedecinComponent } from './profil-medecin/profil-medecin.component';
import { ProfilSecretaireComponent } from './profil-secretaire/profil-secretaire.component';
import { ProfilTherapieComponent } from './profil-therapie/profil-therapie.component';
import { EnvoyerEmailComponent } from './envoyer-email/envoyer-email.component';
import { NavbarMedecinSecondaireComponent } from './navbar-medecin-secondaire/navbar-medecin-secondaire.component';
import { AutorisationComponent } from './autorisation/autorisation.component';
import { Home2Component } from './home2/home2.component';
import { PatientComponent } from './patient/patient.component';
import { SecretaireComponent } from './secretaire/secretaire.component';
import { MedecinSecondaireComponent } from './medecin-secondaire/medecin-secondaire.component';
import { MedecinSecondaireGuard } from './medecin-secondaire.guard';
import { PatientGuard } from './patient.guard';
import { SecretaireGuard } from './secretaire.guard';
import { ModifierPatientComponent } from './modifier-patient/modifier-patient.component';

const routes: Routes = [
  { path: '', component: HomeComponent },//path '/' hezni component home (esem el classe du component home houa Homecompnent)  
  { path: 'home', component: HomeComponent },
  //{path:'home2',component:Home2Component},
  { path: 'login', component: LoginComponent },
  { path: 'navbar0', component: Navbar0Component },
  // {path:'profil',component:ProfilComponent},
  { path: 'registration-patient', component: RegistrationPatientComponent },
  // { path: 'ajouterMedecin', component: AjouterMedecinComponent, canActivate: [MedecinPrincipalGuard] },
  // { path: 'ajouterSecretaire', component: AjouterSecretaireComponent, canActivate: [MedecinPrincipalGuard] },
  // { path: 'ajouterTherapie', component: AjouterTherapieComponent, canActivate: [MedecinPrincipalGuard] },
  { path: 'navbar-patient', component: NavbarPatientComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'navbar-secondaire', component: NavbarMedecinSecondaireComponent },

  { path: 'autorisation', component: AutorisationComponent },

  // { path: 'listeSecretaire', component: ListeSecretaireComponent, canActivate: [MedecinPrincipalGuard] },
  // { path: 'listeMedecin', component: ListeMedecinComponent, canActivate: [MedecinPrincipalGuard] },
  // { path: 'listeTherapie', component: ListeTherapieComponent, canActivate: [MedecinPrincipalGuard] },

  { path: 'navbar-secretaire', component: NavbarSecretaireComponent },

  { path: 'therapieHome/:id', component: TherapieHomeComponent },
  
  // { path: 'updateMedecin/:id', component: ModifierMedecinComponent, canActivate: [MedecinPrincipalGuard] },
  // { path: 'updateSecretaire/:id', component: ModifierSecretaireComponent, canActivate: [MedecinPrincipalGuard] },
  // { path: 'updateTherapie/:id', component: ModifierTherapieComponent, canActivate: [MedecinPrincipalGuard] },
  //{ path: 'rendezvous', component: RendezvousComponent },

 // { path: 'profilMedecin/:id', component: ProfilMedecinComponent },
  // { path: 'profilSecretaire/:id', component: ProfilSecretaireComponent },
  // { path: 'profilTherapie/:id', component: ProfilTherapieComponent },

  // { path: 'envoyerMail', component: EnvoyerEmailComponent },

  

  {
    path: 'medecinPrincipal',
    component: MedecinPrincipalComponent,//    component: MedecinPrincipalComponent,canActivate: [MedecinPrincipalGuard],
    children: [
      { path: '',component: Home2Component},
      { path: 'profil', component: ProfilComponent },
      { path: 'modifierMedecin/:id', component: ModifierMedecinComponent},
      { path: 'modifierPassword/:id', component: ModifierPasswordComponent},



      { path: 'ajouterMedecin', component: AjouterMedecinComponent, canActivate: [MedecinPrincipalGuard] },
      { path: 'ajouterSecretaire', component: AjouterSecretaireComponent, canActivate: [MedecinPrincipalGuard] },
      { path: 'ajouterTherapie', component: AjouterTherapieComponent, canActivate: [MedecinPrincipalGuard] },

      { path: 'listeSecretaire', component: ListeSecretaireComponent, canActivate: [MedecinPrincipalGuard] },
      { path: 'listeMedecin', component: ListeMedecinComponent, canActivate: [MedecinPrincipalGuard] },
      { path: 'listeTherapie', component: ListeTherapieComponent, canActivate: [MedecinPrincipalGuard] },

      { path: 'updateMedecin/:id', component: ModifierMedecinComponent },
      { path: 'updateSecretaire/:id', component: ModifierSecretaireComponent, canActivate: [MedecinPrincipalGuard] },
      { path: 'updateTherapie/:id', component: ModifierTherapieComponent, canActivate: [MedecinPrincipalGuard] },

      { path: 'profilMedecin/:id', component: ProfilMedecinComponent },
      { path: 'profilSecretaire/:id', component: ProfilSecretaireComponent },
      { path: 'profilTherapie/:id', component: ProfilTherapieComponent },

      { path: 'envoyerMail', component: EnvoyerEmailComponent },

      { path: 'consulterHistorique', component: ConsulterhistoriqueComponent },
      { path: 'navbar0', component: Navbar0Component },

      { path: 'therapieHome/:id', component: TherapieHomeComponent },
    ]
  },

  {
    path: 'secretaire',
    component: SecretaireComponent,canActivate: [SecretaireGuard],
    children: [
      { path: '',component: Home2Component},
      { path: 'profil', component: ProfilComponent },
      { path: 'modifierSecretaire/:id', component: ModifierSecretaireComponent},

      { path: 'modifierPassword/:id', component: ModifierPasswordComponent},
      

      { path: 'envoyerMail', component: EnvoyerEmailComponent },
      { path: 'listepatient', component: ListepatientComponent  },
      { path: 'navbar0', component: Navbar0Component },
      { path: 'updateRendezvous/:id', component: ModifierRendezVousComponent },
     // { path: 'gererRendezVous', component: RendezVousComponent },

     { path: 'therapieHome/:id', component: TherapieHomeComponent },

    ]
  },
  {
    path: 'patient',
    component: PatientComponent,canActivate: [PatientGuard],
    children: [
      { path: '',component: Home2Component},
      { path: 'profil', component: ProfilComponent },
      { path: 'modifierPatient/:id', component: ModifierPatientComponent},
      { path: 'modifierPassword/:id', component: ModifierPasswordComponent},

      { path: 'envoyerMail', component: EnvoyerEmailComponent },
      { path: 'rendezvous', component: RendezvousComponent },
      { path: 'profilMedecin/:id', component: ProfilMedecinComponent },
      { path: 'navbar0', component: Navbar0Component },
      { path: 'therapieHome/:id', component: TherapieHomeComponent },

    ]
  },
  {
  path: 'medecinSecondaire',
  component: MedecinSecondaireComponent,canActivate: [MedecinSecondaireGuard],
  children: [
    { path: '',component: Home2Component},
    { path: 'profil', component: ProfilComponent },
    { path: 'modifierMedecin/:id', component: ModifierMedecinComponent},
    { path: 'modifierPassword/:id', component: ModifierPasswordComponent},

    { path: 'envoyerMail', component: EnvoyerEmailComponent },
    { path: 'navbar0', component: Navbar0Component },
    //{path:'historique',comonent:HistoriqueComponent}

    { path: 'therapieHome/:id', component: TherapieHomeComponent },

  ]
}





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

