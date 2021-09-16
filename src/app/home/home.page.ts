import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  dato:String;
  constructor(private router: Router) {}
  
  acceder(){
    let navigationExtra: NavigationExtras={
      state:{dato: this.dato}
    }

    this.router.navigate(['/pagina-inicio'],navigationExtra);
  }

}
