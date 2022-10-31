import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TherapieService } from '../services/therapie.service';
import { Therapie } from '../therapie';

@Component({
  selector: 'app-therapie-home',
  templateUrl: './therapie-home.component.html',
  styleUrls: ['./therapie-home.component.css']
})
export class TherapieHomeComponent implements OnInit {

  therapie :Therapie = new Therapie();
  id:number

  constructor(private therapieService:TherapieService , private route:ActivatedRoute,private router:Router ) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.therapieService.getTherapieById(this.id).subscribe(data =>{
      this.therapie=data;
    })
  }


}
