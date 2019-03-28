import { Component, OnInit } from '@angular/core';
import { Municipio } from 'src/app/models/municipio';
import { ApiMunicipioService } from 'src/app/services/api-municipio.service';


@Component({
  selector: 'app-municipi',
  templateUrl: './municipi.component.html',
  styleUrls: ['./municipi.component.css']
})
export class MunicipiComponent implements OnInit {

displayedColumns: string[] = ['descrizione', 'ubicazione'];
data: Municipio[];
isLoadingResults = true;

  constructor(private api:ApiMunicipioService) { }

  ngOnInit() {
    this.api.getMunicipi().subscribe(res => this.data = res);
      console.log(this.data);
      this.isLoadingResults = false;
  };

}
