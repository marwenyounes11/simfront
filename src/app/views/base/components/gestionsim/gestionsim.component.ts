import { Component, OnInit ,Inject, Input} from '@angular/core';
import { SimService} from '../../service/sim.service'
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';
import { Router ,ActivatedRoute} from '@angular/router';
import { SimComponent } from './sim.component';
import { RessourcehumaineService } from '../../service/ressourcehumaine.service';

@Component({
  selector: 'app-gestionsim',
  templateUrl: './gestionsim.component.html',
  styleUrls: ['./gestionsim.component.css']
})
export class GestionSimComponent implements OnInit {
  sims;
  pageTitle: string;
  error: string;
  uploadError: string;
  wcode : string = '';
  public message: string;
  submitted = false;
  page1=1 ;
  motcle1 = '';
  count1 ;
   pageSize1 = 2;
   ressourceHumaines
  constructor(public crudApi: SimService ,public crudApr: RessourcehumaineService,public fb: FormBuilder,public toastr: ToastrService,
    private router : Router,private route: ActivatedRoute) { }
    isCollapsed1: boolean = false;
  isCollapsed2: boolean = false;
  iconCollapse: string = 'icon-arrow-up';
  isClose1: boolean = false;
  isClose2: boolean = false;
  collapsed(event: any): void {
    // console.log(event);
  }

  expanded(event: any): void {
    // console.log(event);
  }

  toggleCollapse1(): void {
    this.isCollapsed1 = !this.isCollapsed1;
    this.iconCollapse = this.isCollapsed1 ? 'icon-arrow-down' : 'icon-arrow-up';
  }
  toggleCollapse2(): void {
    this.isCollapsed2 = !this.isCollapsed2;
    this.iconCollapse = this.isCollapsed2 ? 'icon-arrow-down' : 'icon-arrow-up';
  }
  get f() { return this.crudApi.dataForm.controls; }
  ngOnInit() {
    this.crudApr.getAll().subscribe(
      ressourceHumaines => {
        this.ressourceHumaines = ressourceHumaines;
      },
      error => this.error = <any>error
    );
    this.getData();
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.pageTitle = 'Edit Sim';
      this.crudApi.getData(+id).subscribe(
        res => {
          this.crudApi.dataForm.patchValue({
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
            remarque: res.remarque,
            idressourceHumaine : res.ressourceHumaine.id
          });
          
        }
      );
    } else {
      this.pageTitle = 'Create Sim';
    }
   this.infoForm();
    
    
  }
  
 

  getData() {
    this.crudApi.getAll().subscribe(
      response =>{this.sims = response;}
     );
   
  }  
 
  infoForm() {
    this.crudApi.dataForm = this.fb.group({
          id: [''],
          aff: ['',  [Validators.required]],
          numAppel: ['', [Validators.required]],
          numAppelAbreg: ['', [Validators.required]],
          modelAppareilGsm: ['', [Validators.required]],
          imei1: ['', [Validators.required]],
          imei2: ['', [Validators.required]],
          numSerieBatterie: ['', [Validators.required]],
          dateMiseEnService: ['', [Validators.required]],
          dateExpiration: ['', [Validators.required]],
          remarque: ['', [Validators.required]],
          idressourceHumaine: ['', [Validators.required]],
        });
    }
   
  
    initForm() {
      this.crudApi.dataForm = this.fb.group({
            id: [''],
            aff: [''],
            numAppel: [''],
            numAppelAbreg: [''],
            modelAppareilGsm: [''],
            imei1: [''],
            imei2: [''],
            numSerieBatterie: [''],
            dateMiseEnService: [''],
            dateExpiration: [''],
            remarque: [''],
            idressourceHumaine: [''],
          });
      }

    ResetForm() {
      this.submitted = false;
        this.crudApi.dataForm.reset();
    }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.crudApi.dataForm.invalid) {
        return;
    }
    const sim = this.crudApi.dataForm.value;
  
      const id = this.crudApi.dataForm.get('id').value;
  
      if (id) {
        this.crudApi.updatedata(+id,sim).subscribe( data => {
          this.toastr.success( 'Validation Faite avec Success');
          this.getData();
          this.initForm();
          this.router.navigate(['/home/base/gestionsim']); 
          
        });
      } else {
        this.crudApi.createData(sim).subscribe( data => {
          this.toastr.success( 'Validation Faite avec Success');
          this.getData();
          this.initForm();
          this.router.navigate(['/home/base/gestionsim']); 
        });
      }
}
close1() {
  this.isClose1 = !this.isClose1;
  const card = document.getElementById('id1');
  if (this.isClose1 )
  {
  card.style.display = "none";
  
}
}
  
close2() {
  this.isClose2 = !this.isClose2;
  const card = document.getElementById('id2');
  if (this.isClose2 )
  {
  card.style.display = "none";
  
}
}
}
