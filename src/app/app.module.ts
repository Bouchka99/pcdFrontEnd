import { NgModule } from '@angular/core';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import {MatToolbarModule} from '@angular/material/toolbar';
import {HttpClientModule} from '@angular/common/http';

//import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { RendezvousComponent } from './rendezvous/rendezvous.component';
import { AjouterMedecinComponent } from './ajouter-medecin/ajouter-medecin.component';
import { AjouterSecretaireComponent } from './ajouter-secretaire/ajouter-secretaire.component';
import { AjouterTherapieComponent } from './ajouter-therapie/ajouter-therapie.component';
import { HomeComponent } from './home/home.component';
import { ListeMedecinComponent } from './liste-medecin/liste-medecin.component';
import { ListeSecretaireComponent } from './liste-secretaire/liste-secretaire.component';
import { ListeTherapieComponent } from './liste-therapie/liste-therapie.component';
import { LoginComponent } from './login/login.component';
import { ModifierMedecinComponent } from './modifier-medecin/modifier-medecin.component';
import { ModifierSecretaireComponent } from './modifier-secretaire/modifier-secretaire.component';
import { ModifierTherapieComponent } from './modifier-therapie/modifier-therapie.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarMedecinSecondaireComponent } from './navbar-medecin-secondaire/navbar-medecin-secondaire.component';
import { NavbarPatientComponent } from './navbar-patient/navbar-patient.component';
import { NavbarSecretaireComponent } from './navbar-secretaire/navbar-secretaire.component';
import { Navbar0Component } from './navbar0/navbar0.component';
import { ProfilComponent } from './profil/profil.component';
import { ProfilMedecinComponent } from './profil-medecin/profil-medecin.component';
import { ProfilSecretaireComponent } from './profil-secretaire/profil-secretaire.component';
import { ProfilTherapieComponent } from './profil-therapie/profil-therapie.component';
import { RegistrationPatientComponent } from './registration-patient/registration-patient.component';
import { EnvoyerEmailComponent } from './envoyer-email/envoyer-email.component';
import { AutorisationComponent } from './autorisation/autorisation.component';
import { Home2Component } from './home2/home2.component';
import { MedecinPrincipalComponent } from './medecin-principal/medecin-principal.component';
import { MedecinSecondaireComponent } from './medecin-secondaire/medecin-secondaire.component';
import { SecretaireComponent } from './secretaire/secretaire.component';
import { PatientComponent } from './patient/patient.component';
import { ConsulterhistoriqueComponent } from './consulterhistorique/consulterhistorique.component';
import { ListepatientComponent } from './listepatient/listepatient.component';
import { ModifierRendezVousComponent } from './modifier-rendez-vous/modifier-rendez-vous.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModifierPatientComponent } from './modifier-patient/modifier-patient.component';
import { ModifierPasswordComponent } from './modifier-password/modifier-password.component';
import { TherapieHomeComponent } from './therapie-home/therapie-home.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RendezvousComponent,
    NavbarComponent,
    LoginComponent,
    Navbar0Component,
    NavbarPatientComponent,
    NavbarMedecinSecondaireComponent,
    NavbarSecretaireComponent,
    ProfilComponent,
    AjouterMedecinComponent,
    AjouterSecretaireComponent,
    AjouterTherapieComponent,
    ListeMedecinComponent,
    ListeSecretaireComponent,
    ListeTherapieComponent,
    ModifierMedecinComponent,
    ModifierSecretaireComponent,
    ModifierTherapieComponent,
    RegistrationPatientComponent,
    ProfilMedecinComponent,
    ProfilSecretaireComponent,
    ProfilTherapieComponent,
    EnvoyerEmailComponent,
    AutorisationComponent,
    Home2Component,
    MedecinPrincipalComponent,
    MedecinSecondaireComponent,
    SecretaireComponent,
    PatientComponent,
    ConsulterhistoriqueComponent,
    ListepatientComponent,
    ModifierRendezVousComponent,
    ModifierPatientComponent,
    ModifierPasswordComponent,
    TherapieHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    NgxMaterialTimepickerModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    HttpClientModule,
    MDBBootstrapModule,
    NgbModule,
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
