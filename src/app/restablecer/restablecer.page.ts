import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-restablecer',
  templateUrl: './restablecer.page.html',
  styleUrls: ['./restablecer.page.scss'],
})
export class RestablecerPage implements OnInit{
  correo: String;
  constructor(public toastController: ToastController, private router: Router) {}
  recuContra(){
    this.presentToast("Contraseña enviada al correo "+this.correo)
    
    let navigationExtra: NavigationExtras={
      state:{dato: this.correo}
    }
    this.router.navigate(['/home'],navigationExtra);

  }
  async presentToast(msg:string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 4000
    });
    toast.present();
  }
  ngOnInit(){
  }
 

}
