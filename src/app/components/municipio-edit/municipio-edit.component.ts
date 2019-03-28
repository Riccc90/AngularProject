import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ApiMunicipioService } from 'src/app/services/api-municipio.service';
import { Subscription } from 'rxjs';
import { Municipio } from 'src/app/models/municipio';

@Component({
  selector: 'app-municipio-edit',
  templateUrl: './municipio-edit.component.html',
  styleUrls: ['./municipio-edit.component.css']
})
export class MunicipioEditComponent implements OnInit {
 

  
  private currentMunicipioSubscription: Subscription;
  isLoadingResults = false;
  municipioForm = new  FormGroup({
  id : new FormControl(''),
  codice : new FormControl(''),
  descrizione : new FormControl(''),
  ubicazione : new FormControl('')
});
municipio: Municipio = { id: '', codice: '', descrizione: '', ubicazione: '' };


  
  

  constructor(private router: Router, private route: ActivatedRoute, private data: ApiMunicipioService, private formBuilder: FormBuilder) { }
  ngOnInit() {
    this.currentMunicipioSubscription = this.data.getMunicipioSingolo(this.route.snapshot.paramMap.get('id'))
      .subscribe(data => this.municipioForm = this.formBuilder.group({
      id: data.id,
      codice: data.codice,
      descrizione:data.descrizione,
      ubicazione:data.ubicazione
      }));
   
  }

  ngOnDestroy() {
    this.currentMunicipioSubscription.unsubscribe();
  }

  /*getMunicipioSingolo(id) {
    this.api.getMunicipioSingolo(id).subscribe(data => {
      this._id = data._id;
      this.municipioForm.setValue({
        codice: data.codice,
        descrizione: data.descrizione,
        ubicazione: data.ubicazione
      });
    });
  }*/



  /*ngOnInit() {
    this.api.getMunicipioSingolo(this.route.snapshot.paramMap.get('id'))
    .subscribe(data => this.municipioForm = this.formBuilder.group({
      id: data._id,
      codice: data.codice,
      descrizione: data.descrizione,
      ubicazione: data.ubicazione,
    
    })
    );
  }*/

  

  onFormSubmit(municipioForm:NgForm) {
    this.isLoadingResults = true;
    this.data.updateMunicipio(municipioForm)
      .subscribe(res => {
          let id = res['_id'];
          this.isLoadingResults = false;
          this.router.navigate(['/municipio-details', id]);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }

  /*municipioDetails() {
    this.router.navigate(['/municipio-details']);
  }*/

  getMunicipioSingolo(id) {
    this.isLoadingResults = true;
    this.data.getMunicipioSingolo(id)
      .subscribe(res => {
          this.isLoadingResults = false;
          this.router.navigate(['/municipio-details/', this.municipio.id]);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }

}
