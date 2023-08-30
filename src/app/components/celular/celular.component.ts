import { Component } from '@angular/core';
import { CelularserviceService } from 'src/app/services/celularservice.service';
import { Celular } from '../Celular';


@Component({
  selector: 'app-celular',
  templateUrl: './celular.component.html',
  styleUrls: ['./celular.component.css']
})
export class CelularComponent {

  constructor(private celularservice: CelularserviceService){
    this.getCelular()
  }


  ngOnInit():void{}

  celular: Celular[] = [];

  getCelular():void{
    this.celularservice.getAll().subscribe((celular) => (this.celular = celular));
  }


}
