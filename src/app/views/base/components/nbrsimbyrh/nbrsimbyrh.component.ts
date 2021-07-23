import { Component, OnInit ,Inject, Input} from '@angular/core';
import { SimService} from '../../service/sim.service';
import { ToastrService } from 'ngx-toastr';

import { Observable } from "rxjs";
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';
import { RessourcehumaineService } from '../../service/ressourcehumaine.service';
@Component({
  selector: 'app-nbrsimbyrh',
  templateUrl: './nbrsimbyrh.component.html',
  styleUrls: ['./nbrsimbyrh.component.css']
})
export class NbrsimbyrhComponent implements OnInit {

  @Input() ressourcehumaines;
  

  
  constructor(public crudApi: RessourcehumaineService, public toastr: ToastrService,
    private router : Router,public fb: FormBuilder
    ) { }
 
  ngOnInit() {
    this.getData();
  }
  
  getData() {
    this.crudApi.getAll().subscribe(
      response =>{this.ressourcehumaines = response;}
     );
   
  }
  
  
 

  

 
 
  removeData(id: number) {
    if (window.confirm('Are sure you want to delete this Sim ?')) {
    this.crudApi.deleteData(id)
      .subscribe(
        data => {
          console.log(data);
          this.toastr.success(' data successfully deleted!'); 
          this.getData();
        },
        error => console.log(error));
  }
  }
  selectData(id ) {
    if (id) {
      this.crudApi.getData(+id).subscribe(
        res => {
          console.log(res.id);
          this.crudApi.dataForm= this.fb.group({
            id:res.id,
            aff: res.aff,
            numAppel: res.numAppel,
            numAppelAbreg: res.numAppelAbreg,
            modelAppareilGsm: res.modelAppareilGsm,
            imei1: res.imei1,
            imei2: res.imei2,
            numSerieBatterie: res.numSerieBatterie,
            dateMiseEnService: res.dateMiseEnService,
            dateExpiration: res.dateExpiration,
            division: res.division,
            service: res.service,
            remarque: res.remarque,
            idressourceHumaine : res.ressourceHumaine.id
          });
          
        }
      );
  }
  }
}
