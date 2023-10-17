import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IHash } from 'src/app/Hash';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( private router:Router) { }
  route:string = 'Moneda';
  ngOnInit(): void {
  }
  routes: IHash = {
    'Moneda': 'coin',
    'Dpf': 'dpf',
    'Minimizar Función': 'minimize',
  }
  navigate(){

    this.router.navigate([this.routes[this.route]]);
  }

}
