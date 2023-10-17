import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.css']
})
export class DiceComponent implements OnInit {
  diceForm = new FormGroup({
    nl: new FormControl('', Validators.required),
    gap: new FormControl('', Validators.required),
    cjue: new FormControl('', Validators.required),
    simulations: new FormControl('', Validators.required),
  });
  constructor() { }

  ngOnInit(): void {
  }
  result:number = 0;
  calcular(){

  }
}
