import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { dpf } from 'src/utilities/methods';


@Component({
  selector: 'app-dpf',
  templateUrl: './dpf.component.html',
  styleUrls: ['./dpf.component.css']
})
export class DpfComponent implements OnInit {

  constructor() { }
  result: number = 0;
  dpfForm = new FormGroup({
    k: new FormControl(''),
    i: new FormControl(''),
    simulations: new FormControl(''),
    years: new FormControl('')
  });

  ngOnInit(): void {
  }

  calcular(){
    const values = {... this.dpfForm.value};
    if(values!== null ){
      const result = dpf(Number.parseFloat(values.k!), Number.parseFloat(values.i!), Number.parseInt(values.simulations!), Number.parseInt(values.years!));
      this.result = result;
      }
  }  
}
