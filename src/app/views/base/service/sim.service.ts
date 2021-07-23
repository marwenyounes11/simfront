import { Injectable } from '@angular/core';
import { HttpClient , HttpRequest, HttpEvent, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class SimService {

  choixmenu : string  = 'A';
    public dataForm:  FormGroup; 
    parametres = new HttpParams();
    constructor(private http: HttpClient) { }
   
    
  
   

    getData(id: number): Observable<any> {
      return this.http.get(`http://localhost:8989/sims/${id}`);
    }
   
    createData(info: Object): Observable<Object> {
      return this.http.post('http://localhost:8989/addsims', info);
    }
    
    updatedata(id: number, value: any): Observable<Object> {
      return this.http.put(`http://localhost:8989/editsims/${id}`, value);
    }
   
    deleteData(id: number): Observable<any> {
     
      return this.http.delete(`http://localhost:8989/deletesims/${id}`, { responseType: 'text' });
    }
  
    getAll(): Observable<any> {
    
      return this.http.get('http://localhost:8989/listsims');
    }
}
