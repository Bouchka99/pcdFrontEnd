import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Rendezvous } from '../rendezvous';
import { RendezvousService } from '../services/rendezvous.service';

@Component({
  selector: 'app-modifier-rendez-vous',
  templateUrl: './modifier-rendez-vous.component.html',
  styleUrls: ['./modifier-rendez-vous.component.css']
})
export class ModifierRendezVousComponent implements OnInit {


  id: number;
  rendezvous: Rendezvous = new Rendezvous();
  _arrivelist: arrive[];
  x: string;
  getarrive() {
    this._arrivelist = [
      { id: 1, name: "en cours", isselected: false },
      { id: 2, name: "en attente", isselected: false },
      { id: 3, name: "pas arrivee", isselected: false }
    ]
  }

  constructor(private rendezvousservice: RendezvousService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.rendezvousservice.getRendezvousById(this.id).subscribe(data => {
      this.rendezvous = data;
    })
    this.getarrive();
  }

  onSubmit() {

    this.rendezvousservice.updateRendezvous(this.id, this.rendezvous).subscribe(data => {
      this.router.navigate(['secretaire']);

    })
  }

  onchange() {

    this.x = this._arrivelist.filter(x => x.isselected == true).map(x => x.name).toString();
    this.rendezvous.arrivee = this.x;
    console.log(this.rendezvous.arrivee);
  }

}
class arrive {
  id: number;
  name: string;
  isselected: boolean;
}

