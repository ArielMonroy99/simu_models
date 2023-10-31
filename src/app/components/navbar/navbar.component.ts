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
  navigate(){
    this.router.navigate([this.route]).then(() => {
      this.route = this.router.url.split('/')[1];
    });


  }

}
