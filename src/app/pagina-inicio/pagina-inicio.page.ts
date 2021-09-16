import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pagina-inicio',
  templateUrl: './pagina-inicio.page.html',
  styleUrls: ['./pagina-inicio.page.scss'],
})
export class PaginaInicioPage implements OnInit {
  dato:any;
  constructor(private activeRoute: ActivatedRoute, private router: Router) {
    this.activeRoute.queryParams.subscribe(params=>{
      if(this.router.getCurrentNavigation().extras.state){
        this.dato=this.router.getCurrentNavigation().extras.state.dato;
        console.log(this.dato)
      }
    });
  }

  ngOnInit() {
  }

}
