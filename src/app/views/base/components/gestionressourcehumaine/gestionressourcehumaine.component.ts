import { Component, OnInit ,Inject, Input} from '@angular/core';
import { RessourcehumaineService} from '../../service/ressourcehumaine.service'
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';
import { Router ,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-gestionressourcehumaine',
  templateUrl: './gestionressourcehumaine.component.html',
  styleUrls: ['./gestionressourcehumaine.component.css']
})
export class GestionRessourcehumaineComponent implements OnInit {
  ressourcehumaines;
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
  constructor(public crudApi: RessourcehumaineService ,public crudApr: RessourcehumaineService,public fb: FormBuilder,public toastr: ToastrService,
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
      this.pageTitle = 'Edit Ressourcehumaine';
      this.crudApi.getData(+id).subscribe(
        res => {
          this.crudApi.dataForm.patchValue({
            id:res.id,
            nom: res.nom,
            prenom: res.prenom,
            division: res.division,
            service: res.service,
            matricule: res.matricule,
            ref: res.ref
          });
          
        }
      );
    } else {
      this.pageTitle = 'Create Ressourcehumaine';
    }
   this.infoForm();
    
    
  }
  
 

  getData() {
    this.crudApi.getAll().subscribe(
      response =>{this.ressourcehumaines = response;}
     );
   
  }  
 
  infoForm() {
    this.crudApi.dataForm = this.fb.group({
          id: [''],
          nom: ['',  [Validators.required]],
          prenom: ['', [Validators.required]],
          division: ['', [Validators.required]],
          service: ['', [Validators.required]],
          matricule: ['', [Validators.required]],
          ref: ['', [Validators.required]],
        });
    }
   
  
    initForm() {
      this.crudApi.dataForm = this.fb.group({
            id: [''],
            nom: [''],
          prenom: [''],
          division: [''],
          service: [''],
          matricule: [''],
          ref: [''],
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
    const ressourcehumaine = this.crudApi.dataForm.value;
  
      const id = this.crudApi.dataForm.get('id').value;
  
      if (id) {
        this.crudApi.updatedata(+id,ressourcehumaine).subscribe( data => {
          this.toastr.success( 'Validation Faite avec Success');
          this.getData();
          this.initForm();
          this.router.navigate(['/home/base/gestionressourcehumaine']); 
          
        });
      } else {
        this.crudApi.createData(ressourcehumaine).subscribe( data => {
          this.toastr.success( 'Validation Faite avec Success');
          this.getData();
          this.initForm();
          this.router.navigate(['/home/base/gestionressourcehumaine']); 
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
