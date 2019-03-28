import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ApiMunicipioService } from 'src/app/services/api-municipio.service';


@Component({
  selector: 'app-muncipio-add',
  templateUrl: './muncipio-add.component.html',
  styleUrls: ['./muncipio-add.component.css']
})
export class MuncipioAddComponent implements OnInit, AfterViewInit {

  constructor(private router: Router, private api: ApiMunicipioService, private formBuilder: FormBuilder, private elementRef: ElementRef) { }

  municipioForm: FormGroup;
  codice:string='';
  descrizione:string='';
  ubicazione:string='';
  isLoadingResults = false;

  ngOnInit() {
    this.municipioForm = this.formBuilder.group({
      'codice' : [null, Validators.required],
      'descrizione' : [null, Validators.required],
      'ubicazione' : [null, Validators.required]
      
    });
  }
  
  onFormSubmit(form:NgForm) {
    this.isLoadingResults = true;
    this.api.addMunicipio(form)
      .subscribe(res => {
          let id = res['_id'];
          this.isLoadingResults = false;
          this.router.navigate(['/municipio-details', id]);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        });
  }
  
  ngAfterViewInit(){
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'aquamarine';
 }


  }


