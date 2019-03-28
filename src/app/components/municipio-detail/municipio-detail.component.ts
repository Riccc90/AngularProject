import { AnimationKeyframesSequenceMetadata } from '@angular/animations';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiMunicipioService } from 'src/app/services/api-municipio.service';
import { Municipio } from 'src/app/models/municipio';


@Component({
  selector: 'app-municipio-detail',
  templateUrl: './municipio-detail.component.html',
  styleUrls: ['./municipio-detail.component.css']
})
export class MunicipioDetailComponent implements OnInit {

  municipio: Municipio = { id: '', codice: '', descrizione: '', ubicazione: '' };
  isLoadingResults = true;

  constructor(private route: ActivatedRoute, private api: ApiMunicipioService, private router: Router) { }

  ngOnInit() {
    console.log(this.route.snapshot.params['id']);
    this.getMunicipioDetails();
  }

  getMunicipioDetails() {
    this.api.getMunicipioSingolo(this.route.snapshot.paramMap.get('id'))
      .subscribe(data => {
        this.municipio = data;
        console.log(this.municipio );
        this.isLoadingResults = false;
      });
  }
  deleteMunicipio(id) {
    this.isLoadingResults = true;
    this.api.deleteMunicipio(id)
      .subscribe(res => {
          this.isLoadingResults = false;
          this.router.navigate(['/municipi']);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }

}
